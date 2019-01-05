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

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';

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
                        <TouchableOpacity style={{marginRight:wp('2%')}}><Icon name='search' size={wp('7%')} color="black" /></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            
                <View style={{alignItems:'center', justifyContent:'center', marginTop:hp('2%')}}>
                    <FlatList 
                    data={this.state.products}
                    renderItem={({item}) =>{
                        return(
                        <View style={{padding:0, width:wp('94%'), margin:wp('0.5%')}}>
                            <View style={{borderRadius:wp('0.1%'), borderWidth:wp('0.2%')}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={item.image.src} style={{width:wp('28%'), position:'relative', top:0, left:wp('0%'), height:hp('20%'), resizeMode:'contain'}}/>
                                    <View style={{position:'relative', top:hp('4%')}}>
                                        <Text style={{color:'#03507E', fontWeight:'bold', fontSize:wp('4.5%')}}>{item.name}</Text>
                                        <View>
                                            <Text style={{color:'red', fontWeight:'bold', fontSize:wp('6%')}}> {item.price*item.times} </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{borderColor:'gray', opacity:0.8, borderWidth:wp('0.1%'), marginHorizontal:wp('2%')}}/>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:wp('2%')}}>
                                    <TouchableOpacity style={{flexDirection:'row'}}>
                                        <Icon name="heart" size={wp('5%')} color="red" style={{marginHorizontal:wp('1%')}}/>
                                        <Icon name="trash" size={wp('5%')} color='#03507E'/>
                                        <Text style={{color:'#03507E', fontWeight:wp('4%'), fontWeight:'bold'}}> Remove </Text>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{padding:wp('1%')}} onPress={()=>{
                                            this.state.products[item.code].times--;
                                            this.setState({
                                                total:this.state.total-item.price
                                            });
                                        }}>
                                            <Icon name="minus-circle" color='#03507E' size={wp('5%')}/>
                                        </TouchableOpacity>
                                        <Text style={{color:'red', fontSize:wp('5%'), fontWeight:'bold'}}> {item.times} </Text>
                                        <TouchableOpacity style={{padding:wp('1%')}} onPress={()=>{
                                            this.state.products[item.code].times++;
                                            this.setState({
                                                total:this.state.total+item.price
                                            });
                                        }}>
                                            <Icon name="plus-circle" color='#03507E' size={wp('5%')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>)
                        }
                    }
                    keyExtractor={item => toString(item.name)}
                    style={{height:hp('66%')}}
                    numColumns={1}
                    /> 
                </View>
                <View>
                    <View style={{flexDirection:'row', height:hp('5%'), justifyContent:'space-between', marginHorizontal:wp("2%")}}>
                        <Text style={{color:"black", fontSize:wp('5%'), fontWeight:"bold"}}> Total </Text>
                        <Text style={{color:"red", fontSize:wp('5%'), fontWeight:"bold"}}> {this.state.total} </Text>
                    </View>
                    <View style={{marginHorizontal:wp('2%')}}>
                        <TouchableOpacity style={{borderRadius:wp('1.5%'), backgroundColor:'#03507E', justifyContent:'center', alignItems:'center', padding:wp('1%')}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:wp('5%')}}> Complete your order </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
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