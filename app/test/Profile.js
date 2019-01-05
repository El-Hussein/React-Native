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
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import profile from '../components/images/profile.png';
import log from '../components/images/log.png';
import lock from '../components/images/lock.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImageProduct, LocalImageBrand, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct_1} from '../components/LocalImage';
// import Grading from 'react-native-grading';
import { LoginButton,AccessToken,GraphRequest,GraphRequestManager,LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import reviewBG from '../components/images/review.jpg';
import backGround from '../components/images/back_g.jpg';
import back_login from '../components/images/login_bg.png';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';
import mobile from '../components/images/mob2.png';
import mobile1 from '../components/images/mob1.png';
import mobile2 from '../components/images/mob3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';

class Login extends Component{

    constructor(props) {
         super()
    }

    handleFacebookLogin () {
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
          function (result) {
                if (result.isCancelled) {
                    alert("login is cancelled.");
                } else {
                    this.setAccessFaceBook(AccessToken);
                    AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        const infoRequest = new GraphRequest(
                        '/me?fields=name,picture',
                        null,
                        this._responseInfoCallback
                        );
                        // Start the graph request.
                        new GraphRequestManager().addRequest(infoRequest).start();
                    }
                    )
                }
                this.props.navigation.navigate('UserProfile');
          },
          function (error) {
            console.log('Login fail with error: ' + error)
          }
        )
      }

    render () {
        
        return (
            <ImageBackground source={backGround} style={{flex:1}}>
                {/* Header */}
                <View style={{ height:hp('16%')}}>
                    <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain"}} >
                        <View style={styles.header_image_bg}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                                <Icon name="arrow-left" size={wp('6%')} color="white" style={{marginLeft:wp('1.8%')}}/>
                            </TouchableOpacity>
                            <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                            <TouchableOpacity>
                            <Icon name="shopping-cart" size={hp('5%')} color="white" onPress={()=>this.props.navigation.navigate('Cart')}/>
                            </TouchableOpacity>
                            
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
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')} style={{marginRight:wp('2%')}}><Icon name='search' size={wp('7%')} color="black" /></TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                
                <ImageBackground source={back_login} style={{height:hp('22%'), justifyContent:'space-around', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{alert('clicked')}}>
                    <Image style={{height:wp('18%'), width:wp('18%'), position:'relative', top:0, right: wp('0%'), resizeMode:'contain', borderRadius:wp('18%')}} source={profile}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'white', fontSize:wp('4.5%'), fontWeight:'900'}} > Ahmed </Text><Icon name="pencil" size={wp('5%')} color="white"  onPress={()=>this.props.navigation.navigate('EditProfile')}/>
                    </View>
                    <Text style={{color:'white', fontSize:wp('4.5%'), fontWeight:'900'}} > ahmed22@gmail.com </Text>
                </ImageBackground>
                
                <View style={{backgroundColor:'blue', flexDirection:'row', height:hp('9%'),  alignItems:'center', justifyContent:'space-around', paddingLeft:wp('2%'), borderRadius:wp('1%'), margin:wp('2%')}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Wishlist')}>
                        <Text style={{color:'white', fontSize:wp('5%'), fontWeight:'bold', marginRight:wp("5%"), width:wp('42%'), textAlign:'center'}}> My Wishlist </Text>
                    </TouchableOpacity>
                    <Icon size={wp('8%')} color="white" name="heart"/>
                </View>

                <View style={{backgroundColor:'blue', flexDirection:'row', height:hp('9%'),  alignItems:'center', justifyContent:'space-around', paddingLeft:wp('2%'), borderRadius:wp('1%'), margin:wp('2%')}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderHistory')}>
                        <Text style={{color:'white', fontSize:wp('5%'), fontWeight:'bold', marginRight:wp("5%"), width:wp('42%'), textAlign:'center'}}> My Orders </Text>
                    </TouchableOpacity>
                    <Icon size={wp('8%')} color="white" name="heart"/>
                </View>

                <View style={{backgroundColor:'blue', flexDirection:'row', height:hp('9%'),  alignItems:'center', justifyContent:'space-around', paddingLeft:wp('2%'), borderRadius:wp('1%'), margin:wp('2%')}}>
                    <TouchableOpacity onPress={()=>alert('share ? wait till finish')}>
                        <Text style={{color:'white', fontSize:wp('5%'), fontWeight:'bold', marginRight:wp("5%"), width:wp('42%'), textAlign:'center'}}> Share with friends </Text>
                    </TouchableOpacity>
                    <Icon size={wp('8%')} color="white" name="share"/>
                </View>

                <View style={{backgroundColor:'blue', flexDirection:'row', height:hp('9%'),  alignItems:'center', justifyContent:'space-around', paddingLeft:wp('2%'), borderRadius:wp('1%'), margin:wp('2%')}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Compare')}>
                        <Text style={{color:'white', fontSize:wp('5%'), fontWeight:'bold', marginRight:wp("5%"), width:wp('42%'), textAlign:'center'}}> Compare </Text>
                    </TouchableOpacity>
                    <Icon size={wp('8%')} color="white" name="compress"/>
                </View>

                <View style={{backgroundColor:'blue', flexDirection:'row', height:hp('9%'),  alignItems:'center', justifyContent:'space-around', paddingLeft:wp('2%'), borderRadius:wp('1%'), margin:wp('2%')}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile')}>
                        <Text style={{color:'white', fontSize:wp('5%'), fontWeight:'bold', marginRight:wp("5%"), width:wp('42%'), textAlign:'center'}}> Edit Profile </Text>
                    </TouchableOpacity>
                    <Icon size={wp('8%')} color="white" name="star"/>
                </View>
            </ImageBackground>
        )
    }
}

export default Login


const DW = Dimensions.get('window').width;
const DH = Dimensions.get('window').height;

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
        fontSize:16, 
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
        minWidth:DW/4,
    },
    product:{
        width: DW/4 - 10,
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
        fontSize:10,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        height:25
    },
    product_price:{
        color:"#03507E",
        fontWeight:"bold",
        fontSize:16,
    },
    addToCart:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#033F63",
        borderRadius:3,
        // borderWidth:1,
        borderColor:"#103D5C",
        width: DW/4 - 20,
        marginVertical:1,
    },
    image_slider:{
        width: DW-2,
    },
    
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },

});
