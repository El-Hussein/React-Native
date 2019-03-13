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
  TextInput,
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

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';
import new_back from '../components/images/new_back.png';

const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'center', marginTop:10,}]}>
        <Image style={{height:hp('14.8%'), width:wp('99%')}} source={props.uri} resizeMode="contain"/>
    </View>
)

class Cart extends Component{

  constructor(props) {
    super()
    this.state = {
        imagesSlider: [
            require('../components/images/2.jpg'),
            require('../components/images/1.jpg'),
            require('../components/images/3.jpg'),
        ],
        categories: [
            {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
            {image:{src: cat2_image, width:2480, height:3508}, name:"comunications"},
            {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
            {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
            {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
        ],
        products: [
            {code:0, image:{src: cat1_image, width:2480, height:3508}, times:1, name:"sumsang galaxy note5 phone Blue", price:4898},
            {code:1, image:{src: cat1_image, width:2480, height:3508}, times:1, name:"computer", price:2299},
            {code:2, image:{src: cat2_image, width:2480, height:3508}, times:1, name:"comunications", price:5999},
        ],
        total:13196,
    }
    
  }

    componentDidMount() {
        lor(this);
    }
    
    componentWillUnMount() {
        rol();
    }

  
  render () {
    return (
      <ScrollView>
        <ImageBackground source={new_back} style={{height:hp('100%'), resizeMethod:"contain"}} >

          {/* Header */}
          <View style={{ height:hp('13%')}}>
                <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain", justifyContent:'space-evenly', alignContent:'center'}} >
                    <View style={{flexDirection:'row',  paddingHorizontal:wp('4%')}}>
                        <Icon name="close" size={wp('8%')} color="white" onPress={()=>this.props.navigation.toggleDrawer()} style={{marginLeft:wp('1.8%')}}/>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:wp('5.5%')}}>  Checkout </Text>
                    </View>
                </ImageBackground>
            </View>
          
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Icon name="check-circle" size={wp('40%')} color="#3BAA34"/>
            </View>
            
            <View>
                <Text style={{fontSize:wp('6%'), color:'#075180', textAlign:'center', fontWeight:'bold', paddingHorizontal:wp('2%')}}> Thank you for placing an order on compueme </Text>
            </View>
            
            <View style={{borderColor:'#075180', borderRadius:wp('1%'), borderWidth:wp('0.3%'), flexDirection:'row', paddingVertical:wp('1%'), paddingHorizontal:wp('3%'), marginHorizontal:wp('2%')}}>
                <Text style={{fontSize:wp('5.2%'), color:'#075180', textAlign:'center', fontWeight:'bold', paddingHorizontal:wp('2%')}}> ORDER NUMBER: </Text>
                <Text style={{fontSize:wp('5.2%'), color:'#39AA34', textAlign:'center', fontWeight:'bold', paddingHorizontal:wp('2%')}}> 32523203 </Text>
            </View>

            <View style={{borderWidth:wp('0.1%'), borderColor:'#0F4E7E', marginHorizontal:wp('6%'), marginVertical:hp('2%')}}/>

            <View>
                <View style={{flexDirection:'row', alignItems:'center', height:hp('3%'), justifyContent:'space-between', marginHorizontal:wp("2%")}}>
                    <Text style={{color:"#055381", fontSize:wp('4.5%'), fontWeight:"bold"}}> NEXT STEPS </Text>
                </View>
            </View>

            <View style={{backgroundColor:'white', marginVertical:wp('2%')}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:wp("2%")}}>
                    <Text style={{color:"#07527A", fontSize:wp('4.5%'), fontWeight:"bold"}}> 
                        Congratulations your order was successfully submitted. You will recieve a confirmation email or SMS. Our Customer Service might contact you shortly to verify your order. 
                    </Text>
                </View>
            </View>

             <View>
                <View style={{flexDirection:'row', alignItems:'center', height:hp('5%'), justifyContent:'space-between', marginHorizontal:wp("2%")}}>
                    <Text style={{color:"#055381", fontSize:wp('4.5%'), fontWeight:"bold"}}> Track your order </Text>
                </View>
            </View>

            <View style={{backgroundColor:'white', marginVertical:wp('2%')}}>
                <View style={{flexDirection:'row', justifyContent:'space-around', margin:wp("2%")}}>
                    <Text style={{color:"#07527A", fontSize:wp('5%'), fontWeight:"bold"}}> 
                        You can track your order from
                    </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', margin:wp("2%")}}>
                    <Text style={{color:"#07527A", fontSize:wp('5%'), fontWeight:"bold"}}> 
                        MY ACCOUNT
                    </Text>
                    <Icon name="arrow-right" size={wp('5%')} color="#024F7D"/>
                    <Text style={{color:"#07527A", fontSize:wp('5%'), fontWeight:"bold"}}> 
                        MY ORDER
                    </Text>
                </View>
            </View>

        </ImageBackground> 
        </ScrollView>
    )
  }
}

export default Cart;

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
    width: wp('47.5%'),
    marginVertical:wp('0.8%'),
    marginHorizontal:wp('0.8%'),
    borderColor:"#03507E",
    borderWidth:wp('0.4%'),
    borderRadius:wp('2%'),
    padding:wp('1%'),
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