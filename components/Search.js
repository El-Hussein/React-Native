import React, { Component } from 'react';
import TabNavigator from './TabNavigator';
import { Text, StyleSheet, TextInput, View, ActivityIndicator, FlatList } from 'react-native';
import { Icon, } from 'react-native-elements';
import Dimensions from 'Dimensions';
import axios from 'axios';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            startSearch: true,
            searchResult: null,
        }
        this._search = this._search.bind(this);
    }

    _search(){
        this.setState({
            startSearch: false,
            searchResult: null,
        });

        var qs = require('qs');
        return axios.post('https://computershopegypt.com/android/search/get', 
                                
                                qs.stringify({
                                    'keyword' : this.state.text,
                                    'start' : 0,
                                    'limit' : 20,
                                })
                            
                            )
        .then( (response) => {
            if(response.data){
                this.setState({
                    startSearch:true,
                    searchResult: response.data,
                })
                console.warn(JSON.stringify(response.data));
            }else{
                this.setState({
                    startSearch:true,
                    searchResult: response.data,
                });
                console.warn(JSON.stringify(response.data));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render () {
        if(this.state.startSearch === true){
            return (
                <View style={{flex:5}}>
                    <View style={styles.header}>
                        <View style={styles.subHeader}>
                            <Icon name="menu" size={35} color='white' type='feather' onPress={()=>this.props.navigation.toggleDrawer()}/>
                            <Text style={{marginLeft: 10, fontSize: 30, color:'white'}} > Computer Shop </Text>
                            <View style={{alignItems: "flex-end", marginLeft: "auto"}}>
                                <Icon name="home" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
                            </View>
                        </View>
                        <View style={{padding:10 , flexDirection: "row", flex:1, justifyContent:'space-between', alignItems:'center'}} >
                            <TextInput style={{height:50, width:DEVICE_WIDTH - 60 , color:'white'}}
                            placeholder='Search'
                            placeholderTextColor='white'
                            onChangeText={(text)=>{
                                this._search();
                                this.setState({
                                    text,
                                })
                            }}
                            />
                            <Icon name='search' color='white' size={20} />
                        </View>
                    </View>
                    <View style={{flex:6}} >
                        <FlatList 
                            data={this.state.dataSource}
                            showsVerticalScrollIndicator={true}
                            renderItem={({item}) =>
                                <View style={{justifyContent:'space-around', alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <View style={{padding:5, borderWidth: 1, borderColor:'red', borderRadius:5, margin:3}}>
                                            <Image source={{uri: item.image}} style={{height:300 , marginHorizontal:10,width:DEVICE_WIDTH/2 - 40, }}/>
                                            <View style={{borderBottomColor:'#eee', borderBottomWidth:1, marginHorizontal:10 ,width:DEVICE_WIDTH/2 - 80}}></View>
                                            <Text style={{fontWeight:'bold', fontSize:20, margin:5, color:'orange'}}> {item.name} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={item => toString(item.age)}
                            numColumns={2}
                            style={{flex:1,}}
                        /> 
                    </View>
                </View> 
            )
        }else{
            return (
                <View style={{flex:5}}>
                    <View style={styles.header}>
                        <View style={styles.subHeader}>
                            <Icon name="menu" size={35} color='white' type='feather' onPress={()=>this.props.navigation.toggleDrawer()}/>
                            <Text style={{marginLeft: 10, fontSize: 30, color:'white'}} > Computer Shop </Text>
                            <View style={{alignItems: "flex-end", marginLeft: "auto"}}>
                                <Icon name="home" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
                            </View>
                        </View>
                        <View style={{padding:10 , flexDirection: "row", flex:1, justifyContent:'space-between', alignItems:'center'}} >
                            <TextInput style={{height:50, width:DEVICE_WIDTH - 60 , color:'white'}}
                            placeholder='Search'
                            placeholderTextColor='white'
                            onChangeText={(text)=>{
                                this._search();
                                this.setState({
                                    text,
                                })
                            }}
                            />
                            <Icon name='search' color='white' size={20} />
                        </View>
                    </View>
                    <View style={{flex:6, margin:50}} >
                        <ActivityIndicator color='black'/>
                    </View>
                </View> 
            )
        }
    }
}

export default Search

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header:{
        flex:1,
        padding:10,
        // backgroundColor: '#62AEFF'
        backgroundColor: '#CC542F'
    },
    subHeader:{
        flex:1,
        flexDirection: "row", 
        padding: 5,
        alignItems: "center",        
    },
    input:{
        flex:1,
        height:40,
        fontSize:20,
    }
})