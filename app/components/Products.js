import React, {Component} from 'react'
import {
    Text,
    View, 
    StyleSheet, 
    TouchableNativeFeedback,
    TouchableOpacity, 
    SafeAreaView, 
    ActivityIndicator, 
    FlatList,
    ImageBackground,
    ScrollView,
    Image,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import bgSrc from './images/wallpaper.png';
import Product from './Product';
import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImage, LocalImageBig, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct, LocalImageFilter} from '../components/LocalImage';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';




class Products extends Component{

    constructor() {
        super()
        this.state = {
            imagesSlider: [
                require('./images/cat_1.png'),
                require('./images/cat_2.png'),
                require('./images/cat_3.png'),
            ] ,
            products: [
                {image:{src: cat1_image, width:2480, height:3508}, name:"sumsang galaxy note5 phone Blue", price:"4,898"},
                {image:{src: cat2_image, width:2480, height:3508}, name:"Huawei Mate 10 Lite Mobile Phone Blue", price:"4,098"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"6,999"},
                {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"26,998"},
                {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"26,998"},
                {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"2,299"},
                {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"4,899"},
            ],
            filters: [
                {image:{src: cat1_image, width:2480, height:3508}},
                {image:{src: cat2_image, width:2480, height:3508}},
                {image:{src: cat3_image, width:200, height:200}},
                {image:{src: cat1_image, width:2480, height:3508}},
                {image:{src: cat2_image, width:2480, height:3508}},
                {image:{src: cat3_image, width:200, height:200}},
                {image:{src: cat1_image, width:2480, height:3508}},
                {image:{src: cat2_image, width:2480, height:3508}},
                {image:{src: cat3_image, width:200, height:200}},
            ],
            }
    }
    render () {
         return (
            <View style={{flex:1}}>
                {/* Header */}
                <View style={{ height:hp('16%')}}>
                        <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain"}} >
                            <View style={styles.header_image_bg}>
                                <Icon name="arrow-left" size={wp('6%')} color="white" onPress={()=>this.props.navigation.navigate('Home')} style={{marginLeft:wp('1.8%')}}/>
                                <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                                <View style={{paddingLeft:wp((5/411.4*100).toString() + '%')}}>
                                    <TouchableOpacity>
                                    <View style={{flexDirection:'row', alignContent:'space-between'}}>
                                        <Icon name="shopping-cart" size={hp('5%')} color="white"/>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{margin:wp('2%'), justifyContent:'space-between', alignItems:'center', backgroundColor:'#F2F2F2', height:hp('6%'), width:wp('96%'), borderRadius:wp('2%'), flexDirection:'row'}}>
                                <TextInput
                                    style={{backgroundColor:'#D2D2D2', paddingLeft:wp('2%'), width:wp('86'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%') , height:hp('6%'), fontSize:wp('4.1%'), color:'white'}}
                                    placeholder="Search Products"
                                    // secureTextEntry={this.props.secureTextEntry}
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    ref="Search Products"
                                    // onSubmitEditing={}
                                    placeholderTextColor="white"
                                    underlineColorAndroid="transparent"
                                    // onChangeText={this.props.passText}
                                    
                                />
                                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Search')} style={{marginRight:wp('2%')}}><Icon name='search' size={wp('7%')} color="black" /></TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                <View style={{flex:3}}>
                    <View style={{
                            backgroundColor:'#033F63', 
                            position:'absolute', 
                            top:0,
                            left:-2,
                            borderRadius:5,
                            paddingVertical:2,
                            paddingLeft:10,
                            paddingRight:4,
                            marginTop:2,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            minWidth:100,
                        }}>
                            <Text style={{color:'white', fontWeight:'800'}}>
                                Communications
                            </Text>
                            <LocalImageCategoryIcon source={cat2_image} originalWidth={2400} originalHeight={3500} />
                    </View>
                    <View> 
                        <FlatList 
                        data={this.state.filters}
                        // showsHorizontalScrollIndicator={true}
                        horizontal={true}
                        renderItem={({item}) =>
                            
                            <View style={{borderRadius:15}}>
                                <View style={{flexDirection:"row", padding:1, justifyContent:'center'}}>
                                    <LocalImageFilter source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                                    {/* <Icon style={{position:'absolute', top:2, right:-9}} name="heart" size={15} color="red"/>
                                    <Icon style={{position:'absolute', top:2, left:-9}} name="compress" size={15} color="black"/> */}
                                </View>
                                {/* <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center', flex:1.5 }}>
                                    <ScrollView>
                                        <Text style={[styles.product_name, {fontSize:10}]}>{item.name}</Text>
                                    </ScrollView>
                                    <View style={{flexDirection:'row'}}>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.addToCart}>
                                    <Text style={[styles.product_price, {color:'#F0F0F0'}]}>{item.price}</Text>
                                    <Text style={{color:'red', marginTop:12, fontWeight:"bold", fontSize:10}}>EGP</Text>
                                </TouchableOpacity> */}
                            </View>
                        }
                        // numColumns={3}
                        keyExtractor={item => toString(item.name)}
                        style={{ backgroundColor:'#336A8D', borderRadius:5, margin:3, marginTop:28}}
                        />
                    </View>
                </View>
                <View style={{flex:15}}>
                    <FlatList 
                    data={this.state.products}
                    showsHorizontalScrollIndicator={true}
                    // horizontal={true}
                    renderItem={({item}) =>
                        
                        <View style={styles.product}>
                            <View style={{flexDirection:"row", padding:1, justifyContent:'center'}}>
                                <LocalImageSubCategoryProduct source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                                <Icon style={{position:'absolute', top:2, right:-18}} name="heart" size={15} color="red"/>
                                <Icon style={{position:'absolute', top:2, left:-18}} name="compress" size={15} color="black"/>
                            </View>
                            <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center', flex:1.5 }}>
                                <ScrollView>
                                    <Text style={[styles.product_name, {fontSize:10}]}>{item.name}</Text>
                                </ScrollView>
                                <View style={{flexDirection:'row'}}>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.addToCart}>
                                <Text style={[styles.product_price, {color:'#F0F0F0'}]}>{item.price}</Text>
                                <Text style={{color:'red', marginTop:12, fontWeight:"bold", fontSize:10}}>EGP</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    numColumns={3}
                    keyExtractor={item => toString(item.name)}
                    style={{ backgroundColor:'#033F63' }}
                    />
                </View>
             </View>
         )
    }
}

export default Products

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header:{
        flex: 2.4,
        flexDirection:'row',
    },
    categories:{
        flex: 2,
        // backgroundColor:'blue',
    },
    slider:{
        flex: 2.8,
        backgroundColor:'grey',
        marginBottom:2,
        marginTop:1,
    },
    selected_products:{
        // flex: 15,
        // backgroundColor:'blue'
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
        width:'58%',
        height:'80%',
    
    },
    
    image_slider:{
        width: DEVICE_WIDTH-2,
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
        width: DEVICE_WIDTH/3 - 10,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:0,
        margin:5,
        backgroundColor:"#C2D5E0",
        height:125,
        borderRadius:5
    },
    product_name:{
        textAlign: 'center',
        color:"#03507E",
        fontWeight:"600",
        fontSize:12,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
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
        backgroundColor:"#033F63",
        borderRadius:3,
        // borderWidth:1,
        borderColor:"#103D5C",
        width: DEVICE_WIDTH/3 - 21,
        marginVertical:1,
        marginBottom:4
    },
});
