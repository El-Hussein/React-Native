import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImage, LocalImageBig, SponserImage} from '../components/LocalImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import backGround from '../components/images/bg3.jpg';


class Search extends Component{

    constructor(props) {
        super()
        this.state = {
            searches:[
              {name:'mobile'},
              {name:'computer table'},
              {name:'wooden toys'},
              {name:'woodland shoes'},
            ],
            search_text:'Search Products',
            history:true,
        }
    }
    render () {
      Flat = ()=>{
        if(this.state.history){
          return (
            <FlatList
              data={this.state.searches}
              renderItem={({item}) =>{
                return (
                <View style={{flexDirection:"row", height:hp('8%'), alignItems:'center', marginBottom:hp('1.5%'), backgroundColor:'#0A5481', justifyContent:'space-between', paddingHorizontal:wp('1%')}}>
                    <Icon name="arrow-right" color="white" size={wp('4%')}/>
                    <Text style={{color:'white', fontSize:wp('3.8%')}}> {item.name} </Text>
                    <TouchableOpacity onPress={()=>this.setState({ search_text:item.name, history:false })}>
                      <Icon name="arrow-up" color="white" size={wp('4%')}/>
                    </TouchableOpacity>
                </View>
                )}
              }
              keyExtractor={item => toString(item.name)}
            />
          )
        }else{
          return (
            <FlatList
              data={this.state.searches}
              renderItem={({item}) =>{
                return (
                <View style={{flexDirection:"row", height:hp('8%'), alignItems:'center', marginBottom:hp('1.5%'), backgroundColor:'#0A5481', paddingHorizontal:wp('1%')}}>
                    <Icon name="search" color="white" size={wp('4%')} style={{marginHorizontal:wp('3%')}}/>
                    <Text style={{color:'white', fontSize:wp('4%')}}> {item.name} </Text>
                </View>
                )}
              }
              keyExtractor={item => toString(item.name)}
            />

          )
        }
      }
        if(this.state.history){
          return (
              <ImageBackground style={{flex:1, resizeMode:'contain'}} source={backGround}>
                  {/* Header */}
                  <View style={{ height:hp('10%')}}>
                      <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain"}} >
                          <View style={styles.header_image_bg}>
                            <TouchableOpacity>
                              <Icon name="arrow-left" size={wp('6%')} color="white" onPress={()=>this.props.navigation.navigate('Home')} style={{marginLeft:wp('1.8%')}}/>
                            </TouchableOpacity>
                            <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                            <TouchableOpacity>
                              <Icon name="shopping-cart" size={hp('5%')} color="white" onPress={()=>this.props.navigation.navigate('Cart')}/>
                            </TouchableOpacity>
                          </View>
                      </ImageBackground>
                  </View>
                  <View style={{maxHeight:hp('84.5%'), borderWidth:wp('0.6%'), marginHorizontal:wp('1%'), borderColor:'#0A5483', borderRadius:wp('0.2%'), marginTop:wp('2%'),  shadowOffset: { width: 0, height: hp('20%') }, shadowColor: 'black',}}>
                    <View style={{margin:wp('2%'), justifyContent:'space-around', alignItems:'center', backgroundColor:'#0A5481', height:hp('6%'), width:wp('93%'), borderRadius:wp('1%'), flexDirection:'row'}}>
                      <TouchableOpacity style={{}}><Icon name='search' size={wp('5%')} color="white" /></TouchableOpacity>
                      <TextInput
                          style={{backgroundColor:'white', textAlign:'center', paddingLeft:wp('2%'), width:wp('75'), borderRadius:wp('1%'), height:hp('5%'), fontSize:wp('6%'), color:'#C4C4C4', justifyContent:'center', alignItems:'center', alignContent:'center', padding:0}}
                          // placeholder="Search Products"
                          // secureTextEntry={this.props.secureTextEntry}
                          autoCorrect={false}
                          returnKeyType="next"
                          ref="Search Products"
                          // onSubmitEditing={}
                          placeholderTextColor="#C4C4C4"
                          underlineColorAndroid="transparent"
                          value={this.state.search_text}
                          
                          onChangeText={(text)=>this.setState({search_text:text, history:false})}
                      />
                      <TouchableOpacity style={{marginRight:wp('2%')}}><Icon name='arrow-right' size={wp('5%')} color="white" /></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Text style={{color:'#EAEBEF', fontSize:wp('3.8%')}}> Recent searches </Text>
                      <TouchableOpacity>
                        <Text style={{color:'#EAEBEF', fontSize:wp('3.8%')}}> clear all </Text>
                      </TouchableOpacity>
                    </View>
                    <Flat/>

                  </View>
              </ImageBackground>
            )
        }else{
          return (
            <ImageBackground style={{flex:1, resizeMode:'contain'}} source={backGround}>
                {/* Header */}
                <View style={{ height:hp('10%')}}>
                    <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain"}} >
                        <View style={styles.header_image_bg}>
                          <TouchableOpacity>
                            <Icon name="arrow-left" size={wp('6%')} color="white" onPress={()=>this.props.navigation.navigate('Home')} style={{marginLeft:wp('1.8%')}}/>
                          </TouchableOpacity>
                          <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                          <TouchableOpacity>
                            <Icon name="shopping-cart" size={hp('5%')} color="white" onPress={()=>this.props.navigation.navigate('Cart')}/>
                          </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{maxHeight:hp('84.5%'), borderWidth:wp('0.6%'), marginHorizontal:wp('1%'), borderColor:'#0A5483', borderRadius:wp('0.2%'), marginTop:wp('2%'),  shadowOffset: { width: 0, height: hp('20%') }, shadowColor: 'black',}}>
                  <View style={{margin:wp('2%'), justifyContent:'space-around', alignItems:'center', backgroundColor:'#0A5481', height:hp('6%'), width:wp('93%'), borderRadius:wp('1%'), flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.setState({history:true})}}><Icon name='long-arrow-left' size={wp('5%')} color="white" /></TouchableOpacity>
                    <TextInput
                        style={{backgroundColor:'white', paddingLeft:wp('4%'), width:wp('75'), borderRadius:wp('1%'), height:hp('5%'), fontSize:wp('6%'), color:'#C4C4C4', justifyContent:'center', alignItems:'center', alignContent:'center', padding:0}}
                        autoCorrect={false}
                        returnKeyType="next"
                        ref="Search_Products"
                        placeholder="Search Products"
                        placeholderTextColor="#C4C4C4"
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>this.setState({search_text:text, history:false})}
                        value={this.state.search_text}
                    />
                    <TouchableOpacity style={{marginRight:wp('2%')}} onPress={()=>this.setState({search_text:''})}><Icon name='times' size={wp('5%')} color="white" /></TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#EAEBEF', fontSize:wp('3.8%')}}> Recent searches </Text>
                    <TouchableOpacity>
                      <Text style={{color:'#EAEBEF', fontSize:wp('3.8%')}}> clear all </Text>
                    </TouchableOpacity>
                  </View>
                  <Flat/>
                </View>
            </ImageBackground>
          )
        }
    }
}

export default Search


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header:{
    flex: 2.6,
    flexDirection:'row',
  },
  categories:{
    flex: 2,
    // backgroundColor:'blue',
  },
  slider:{
    flex: 4,
    backgroundColor:'grey',
    marginBottom:2,
    marginTop:1,
  },
  selected_products:{
    flex: 15,
    // backgroundColor:'green',
  },
  footer:{
    flex: 2.6,
    // backgroundColor:'brown',
  },


  header_image_bg:{
    flex: 1,
    resizeMode:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingLeft:4
  },
  logo :{
    width:'55%',
    height:'80%',

  },

  image_slider:{
    width: wp('99%'),
  },

  category:{
    margin:1,
    // padding:1,
    justifyContent:'center',
    alignItems:'center',
  },
  category_image: {
    width:35,
    height:35,
    marginVertical:2,
  },
  category_name:{
    fontWeight:"bold",
    fontSize:12,
    color: "white",
  },

  product:{
    width: wp('40%'),
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    padding:0,
    margin:2,
    borderColor:"#eeeeee",
    borderWidth:wp('0.4%'),
    borderRadius:wp('5%')
  },
  product_name:{
    textAlign: 'center',
    color:"#03507E",
    fontWeight:"600",
    fontSize:12,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    height:hp('5%')
  },
  product_price:{
    color:"#03507E",
    fontWeight:"bold",
    fontSize:18,
  },

  addToCart:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#FE0000",
    borderRadius:5,
    borderWidth:1,
    borderColor:"#770101"
  },
})  