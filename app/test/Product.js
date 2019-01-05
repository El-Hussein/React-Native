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
import header_bg from '../components/images/header_bg.jpg';
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImageProduct, LocalImageBrand, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct_1} from '../components/LocalImage';
// import Grading from 'react-native-grading';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

import reviewBG from '../components/images/review.jpg';
import backGround from '../components/images/bg2.jpg';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';

const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'flex-start'}]}>
        <LocalImageProduct source={props.uri} originalWidth={props.width} originalHeight={props.height}/>
    </View>
)

class Product extends Component{

    constructor(props) {
        super()

        this.state = {
            products: [
                {image:{src: cat1_image, width:2480, height:3508}, name:"sumsang galaxy note5 phone Blue", price:"4,898"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"26,998"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"6,999"},
                {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"2,299"},
                // {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"4,899"},
                // {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"26,998"},
                // {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                // {image:{src: cat2_image, width:2480, height:3508}, name:"Huawei Mate 10 Lite Mobile Phone Blue", price:"4,098"},
                // {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
            ],
            imagesSlider: [
                {image:require('../components/images/mob1.png'), width:1200, height:900},
                {image:require('../components/images/mob2.png'), width:444, height:325},
                {image:require('../components/images/mob3.png'), width:657, height:456},
            ],
        }
    }

    componentDidMount() {
        loc(this);
    }
      
    componentWillUnMount() {
        rol();
    }

    render () {
        return (
            <ScrollView>
                <ImageBackground source={backGround} style={{flex:1}}>
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
                            <View onPress={()=>this.props.navigation.navigate('Search')} style={{margin:wp('2%'), justifyContent:'space-between', alignItems:'center', backgroundColor:'#F2F2F2', height:hp('6%'), width:wp('96%'), borderRadius:wp('2%'), flexDirection:'row'}}>
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
                            <TouchableOpacity style={{marginRight:wp('2%')}}><Icon name='search' size={wp('7%')} color="black" /></TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    

                        <View style={{height:hp('35%'), width:wp('96%'), backgroundColor:'white', borderWidth:wp('0.6%'), borderColor:'#013D62', margin:wp('2%'), borderRadius:wp('1%'),flex:hp('100%')}}>
                            <Swiper 
                                style={{width: wp('96%')}}
                                // showsPagination={false}
                                autoplay={false}
                                dotStyle={{width:wp((18/411.4*100).toString() + '%'), height:hp((4/683.4*100).toString() + '%'), backgroundColor:'#F0F0F0', borderWidth:wp((1/411.4*100).toString() + '%'), borderColor:'#A0A0A0', marginLeft:wp((6/411.4*100).toString() + '%'), marginRight:wp((6/411.4*100).toString() + '%')}}
                                dotColor="#F0F0F0"
                                activeDotStyle={{width:wp((18/411.4*100).toString() + '%'), height:hp((4/683.4*100).toString() + '%'), backgroundColor:'#033F63', borderWidth:wp((1/411.4*100).toString() + '%'), borderColor:'#033F63', marginLeft:wp((6/411.4*100).toString() + '%'), marginRight:wp((6/411.4*100).toString() + '%')}}
                                activeDotColor="#6D6D6F"
                                paginationStyle={{position:'absolute', bottom:hp((2/683.4*100).toString() + '%'),right:0}}
                                > 
                                {
                                    this.state.imagesSlider.map((item, i) => <Slider 
                                        uri={item.image}
                                        width={item.width}
                                        height={item.height}
                                        key={i}
                                    />)
                                }
                                {/* style={{flex:1}} */}
                            </Swiper>
                            <Icon size={wp('10%')} name="compress" color='gray' style={{position:'absolute', top:hp('2%'), left:wp('4%')}} />
                            <Icon size={wp('10%')} name="heart" color='gray' style={{position:'absolute', top:hp('2%'), right:wp('4%')}} />
                        </View>

                        {/* sssssss */}
                        <View>

                            <View style={{height:hp('17%'), width:wp('96%'), backgroundColor:'white', borderWidth:wp('0.6%'), borderColor:'#013D62', marginHorizontal:wp('2%'), marginBottom:wp('1%'), borderRadius:wp('1%'),flex:hp('100%')}}>
                                {/* category name */}
                                <View style={{flexDirection:'row', width:wp('64%')}}>
                                    <View>
                                        <View style={{flexDirection:'row', alignItems:'center',}}>
                                            <Text style={{fontSize:hp((15/683.4*100).toString() + '%'), fontWeight:'800', color:'#083D5C',  textAlign:'left'}}> Brand: </Text>
                                            <LocalImageBrand source={cat1_image} originalHeight={30} originalWidth={30}/>
                                        </View>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Text style={{fontSize:hp((15/683.4*100).toString() + '%'), fontWeight:'800', color:'#083D5C',  textAlign:'left'}}> Product Code: Huawawi nova 3</Text>
                                        </View>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Text style={{fontSize:hp((15/683.4*100).toString() + '%'), fontWeight:'800', color:'#083D5C',  textAlign:'left'}}> Availability: In Stock</Text>
                                        </View>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Text style={{fontSize:hp((15/683.4*100).toString() + '%'), fontWeight:'800', color:'#083D5C',  textAlign:'left'}}> 
                                                Color: 
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width:wp('43%'), justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                        
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{color:'red', fontSize:hp('3%'), fontWeight:'bold'}}>
                                                2.300
                                            </Text>
                                            <Text style={{fontSize:wp((15/683.4*100).toString() + '%'), marginTop:hp('2%'), color:'#083D5C', fontWeight:'bold'}}>  
                                                EGP
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                                            <View style={{height:hp((1/683.4*100).toString() + '%'), borderBottomWidth:wp('0.3%'), borderColor:'red', position:'absolute', top:hp((14/683.4*100).toString() + '%'), width:wp((70/411.4*100).toString() + '%')}}></View>
                                            <Text style={{color:'#083D5C', fontSize:hp((15/683.4*100).toString() + '%'), fontWeight:'bold'}}>
                                                5.599
                                            </Text>
                                            <Text style={{fontSize:wp((15/683.4*100).toString() + '%'), marginTop:hp('2%'), color:'#083D5C', fontWeight:'bold'}}>  
                                                EGP
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center', alignItems:'center'}}>
                                            <TouchableOpacity style={{backgroundColor:'#083D5C', width:wp('34%'), borderRadius:hp((5/683.4*100).toString() + '%'), justifyContent:'center', alignItems:'center'}}>
                                                <Text style={{color:'white', fontSize:wp('4.8%')}} > Buy Now </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </View>

                        </View>
                        <View style={{height:hp('15%'), width:wp('96%'), backgroundColor:'white', borderWidth:wp('0.6%'), borderColor:'#013D62', marginHorizontal:wp('2%'), marginBottom:wp('1%'), borderRadius:wp('1%'), justifyContent:'center', alignItems:'center'}}>
                            {/* <View style={{width:wp('95%'), justifyContent:'center', alignItems:'center', borderRadius:hp((5/683.4*100).toString() + '%')}}> */}
                                <Text style={styles.header4}>
                                    Specifications
                                </Text>
                                <TouchableOpacity style={{backgroundColor:'#083D5C', borderRadius:3, position:'absolute', bottom:hp('1%'), right:wp('1%')}}>
                                    <Text style={{color: 'white', fontSize:hp((12/683.4*100).toString() + '%')}}> Read more </Text>
                                </TouchableOpacity>
                            {/* </View> */}
                        </View>
                        <View style={{height:hp('15%'), width:wp('96%'), backgroundColor:'white', borderWidth:wp('0.6%'), borderColor:'#013D62', marginHorizontal:wp('2%'), marginBottom:wp('1%'), borderRadius:wp('1%'), justifyContent:'center', alignItems:'center'}}>
                            {/* <View style={{width:wp('95%'), justifyContent:'center', alignItems:'center', borderRadius:hp((5/683.4*100).toString() + '%')}}> */}
                                <Text style={styles.header4}>
                                    Description
                                </Text>
                                <Text style={{color:'#044065', fontSize:wp('3.5%'), textAlign:'center'}}>  
                                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                                </Text>
                                <TouchableOpacity style={{backgroundColor:'#083D5C', borderRadius:3, position:'absolute', bottom:hp('1%'), right:wp('1%')}}>
                                    <Text style={{color: 'white', fontSize:hp((12/683.4*100).toString() + '%')}}> Read more </Text>
                                </TouchableOpacity>
                            {/* </View> */}
                        </View>

                        <View style={{height:hp((40/683.4*100).toString() + '%')}}>
                            <ImageBackground source={reviewBG} style={{flexDirection:'row', alignItems:'center', paddingLeft:wp((15/411.4*100).toString() + '%'), flex:1}}>
                                <Icon name="file-text-o" size={20} color="white"/>
                                <Text style={{color:'white', fontSize:hp((16/683.4*100).toString() + '%'), fontWeight:'bold'}}> Write Review </Text>
                            </ImageBackground>
                            {/* <Image source={header_bg} style={{width:100,  height:20}} /> */}
                        </View>

                        <View style={{height:hp((140/683.4*100).toString() + '%')}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:wp('1.5%'), paddingVertical:wp('0.5%'), }}>
                                <Text style={{ color:'white', fontSize:hp((14/683.4*100).toString() + '%'), fontWeight:'600' }}>
                                    Approximate Stuff
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color:'white', fontSize:hp((14/683.4*100).toString() + '%'), fontWeight:'600' }}>
                                        See All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList 
                                data={this.state.products}
                                // showsHorizontalScrollIndicator={true}
                                horizontal={true}
                                renderItem={({item}) =>
                                    
                                    <View style={styles.product}>
                                        <View style={{flexDirection:"row", padding:1, justifyContent:'center'}}>
                                            <LocalImageSubCategoryProduct_1 source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                                            <Icon style={{position:'absolute', top:hp((2/683.4*100).toString() + '%'), right:wp((-20/411.4*100).toString() + '%')}} name="heart" size={wp('4%')} color="red"/>
                                            <Icon style={{position:'absolute', top:hp((2/683.4*100).toString() + '%'), left:wp((-20/411.4*100).toString() + '%')}} name="compress" size={wp('4%')} color="black"/>
                                        </View>
                                        <View style={{textAlign: 'center', paddingHorizontal:wp((2/411.4*100).toString() + '%'), alignItems:'center', justifyContent:'center', flex:1.5 }}>
                                            <ScrollView>
                                                <Text style={[styles.product_name, {fontSize:hp((12/683.4*100).toString() + '%')}]}>{item.name}</Text>
                                            </ScrollView>
                                        </View>
                                        <TouchableOpacity style={styles.addToCart}>
                                            <Text style={[styles.product_price, {color:'#F0F0F0'}]}>{item.price}</Text>
                                            {/* <Text style={{color:'red', marginTop:12, fontWeight:"bold", fontSize:hp((12/683.4*100).toString() + '%')}}>EGP</Text> */}
                                        </TouchableOpacity>
                                    </View>
                                }
                                // numColumns={2}
                                keyExtractor={item => toString(item.name)}
                                style={{ backgroundColor:'#033F63' }}
                            />
                        </View>
                    {/* </View> */}
                </ImageBackground>
            </ScrollView>
        )
    }
}

export default Product

const DEVICE_WIDTH = wp('100%');

const styles = StyleSheet.create({
    header:{
        // flex: 2,
        // flexDirection:'row',
        height:65,
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
    header4:{ 
        position:'absolute', 
        top:0, 
        fontWeight:'900', 
        fontSize:hp((12/683.4*100).toString() + '%'), 
        color:'#AC0703' 
    },
    catName:{
        backgroundColor:'#033F63', 
        position:'absolute', 
        top:0,
        left:-2,
        borderRadius:5,
        paddingVertical:2,
        paddingLeft:10,
        paddingRight:4,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        minWidth:DEVICE_WIDTH/4,
    },
    product:{
        width: DEVICE_WIDTH/4 - 10,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:0,
        marginVertical:3,
        marginHorizontal:5,
        backgroundColor:"#FFFFFF",
        
    },
    product_name:{
        textAlign: 'center',
        color:"#03507E",
        fontWeight:"500",
        fontSize:hp((12/683.4*100).toString() + '%'),
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        height:25
    },
    product_price:{
        color:"#03507E",
        fontWeight:"bold",
        fontSize:hp((12/683.4*100).toString() + '%'),
    },
    addToCart:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#033F63",
        borderRadius:3,
        // borderWidth:1,
        borderColor:"#103D5C",
        width: DEVICE_WIDTH/4 - 20,
        marginVertical:1,
    },
    
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },

});
