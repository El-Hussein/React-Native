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
        addresses: [
            {name:"Ahmed Mahmoud", phone:"01023239809", region:"Giza", home:'27 محمد احمد بجوار شارع العبور الدور التاني شقه يمين السلم'},
            {name:"Ahmed Mahmoud", phone:"01023239809", region:"6th of October", home:'MOHAMED AHMED /20 /10'},
            {name:"Ahmed Mahmoud", phone:"01023239809", region:"Dokki", home:'MOHAMED AHMED /20 /10'},
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
                        <Text style={{color:'white', fontWeight:'bold', fontSize:wp('5.5%')}}>  ADDRESS BOOK </Text>
                    </View>
                </ImageBackground>
            </View>
          
            
            
            <View>
                <View style={{flexDirection:'row', alignItems:'center', height:hp('7%'), justifyContent:'center', paddingTop:wp('2%'), marginHorizontal:wp("2%"), shadowColor:"#000", shadowRadius:wp("2%"), shadowOffset:{width:0, height:5}, shadowOpacity:0.5}}>
                    <Text style={{color:"#FFF", fontSize:wp('4%'), fontWeight:"bold", backgroundColor:'#014E7C', padding:wp('1%'), borderRadius:wp('2%')}}> ADD NEW ADDRESS </Text>
                </View>
            </View>

            <View style={{alignItems:'center', justifyContent:'center'}}>
                <FlatList 
                data={this.state.addresses}
                renderItem={({item}) =>{
                    return(
                        <View style={{padding:wp('2%'), margin:wp('2%'), backgroundColor:'white', width:wp('94%'), borderWidth:wp('0.5%'), borderColor:'#CBD2D8'}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                <Text style={{color:'#04517F', fontSize:wp('4%'), margin:wp('1.5%'), fontWeight:'bold'}}> {item.name} </Text>
                                <TouchableOpacity onPress={()=>alert('edit')}>
                                    <Icon name="pencil" size={wp('5%')} color="#04517F" />    
                                </TouchableOpacity>
                            </View>
                            <Text style={{color:'#6F8DA9', fontWeight:'800', fontSize:wp('4%'), margin:wp('1.5%')}}> {item.home} </Text>
                            <Text style={{color:'#6F8DA9', fontWeight:'800', fontSize:wp('4%'), margin:wp('1.5%')}}> {item.region} </Text>
                            <Text style={{color:'#6F8DA9', fontWeight:'800', fontSize:wp('4%'), margin:wp('1.5%')}}> {item.phone} </Text>
                        </View>
                    )
                }}
                keyExtractor={item => toString(item.name)}
                numColumns={1}
                /> 
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