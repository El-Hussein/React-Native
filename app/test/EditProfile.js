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
import user from '../components/images/key.png';
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

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

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
                            <TouchableOpacity>
                            <Icon name="arrow-left" size={wp('6%')} color="white" onPress={()=>this.props.navigation.goBack()} style={{marginLeft:wp('1.8%')}}/>
                            </TouchableOpacity>
                            <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                            <TouchableOpacity>
                            <Icon name="shopping-cart" size={hp('5%')} color="white" onPress={()=>this.props.navigation.navigate('Cart')}/>
                            </TouchableOpacity>
                            
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
                
                <View style={{paddingHorizontal:wp('2%'), height:hp('32%'), marginTop: hp('5%')}}>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{fontWeight:'300', fontSize:26, color:'black'}} >Edit Profile</Text>
                        <Image source={user} style={{width:DW/8.5, height:DW/8.5, position:'relative', left:0, top:hp('-1%')}}/>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder="First Name"
                            // secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="First Name"
                            // onSubmitEditing={}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            // onChangeText={this.props.passText}
                        />
                        <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
                            <Icon name="user" size={wp('8%')} color="white"/>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder="Second Name"
                            // secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="Second Name"
                            // onSubmitEditing={}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            // onChangeText={this.props.passText}
                        />
                        <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
                            <Icon name="user" size={wp('8%')} color="white"/>
                        </View>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder="22/1/1994"
                            // secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="22/1/1994"
                            // onSubmitEditing={}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            // onChangeText={this.props.passText}
                        />
                        <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
                            <Icon name="gift" size={wp('8%')} color="white"/>
                        </View> 
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder="phone"
                            // secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            // onSubmitEditing={}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            // onChangeText={this.props.passText}
                        />
                        <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
                            <Icon name="phone" size={wp('8%')} color="white"/>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder="E-mail"
                            // secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="E-mail"
                            // onSubmitEditing={}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            // onChangeText={this.props.passText}
                        />
                        <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6}}>
                            <Icon name="envelope" size={wp('8%')} color="white"/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                            <TextInput
                                style={{backgroundColor:'#D2D2D2', width:wp('32%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('12%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                                placeholder="country"
                                // secureTextEntry={this.props.secureTextEntry}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="country"
                                // onSubmitEditing={}
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                                // onChangeText={this.props.passText}
                            />
                            <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6, position:'relative',left:wp('-32%')}}>
                                <Icon name="globe" size={wp('8%')} color="white"/>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                            <TextInput
                                style={{backgroundColor:'#D2D2D2', width:wp('32%'), borderRadius:4, height:hp('7%'), position:'relative', left:wp('20%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                                placeholder="city"
                                // secureTextEntry={this.props.secureTextEntry}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="city"
                                // onSubmitEditing={}
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                                // onChangeText={this.props.passText}
                            />
                            <View style={{width:wp('12%'), height:wp('11%'), position:'relative',left:wp('-84%'), backgroundColor:'#03426D', justifyContent:'center', alignItems:'center', borderTopLeftRadius:6, borderBottomLeftRadius:6, position:'relative',left:wp('-24%')}}>
                                <Icon name="user" size={wp('8%')} color="white"/>
                            </View>
                        </View>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('0.4%')}}>
                        {/* <TouchableOpacity style={{backgroundColor:'#39496B', borderRadius:3, width:100, padding:8, flexDirection:'row', justifyContent:'center'}}> */}
                        <TouchableOpacity style={{backgroundColor:'#03426D', borderRadius:3, width:wp('40%'), padding:4, flexDirection:'row', justifyContent:'center'}}>
                            {/* <Icon name='sign-in'  size={20} color='white'/> */}
                            <Icon name='pencil'  size={25} color='white'/>
                            {/* <Text style={{color:'white', fontWeight:'bold', fontSize:14}}> login </Text> */}
                            <Text style={{color:'white', fontWeight:'600', fontSize:18}}> Edit profile </Text>
                        </TouchableOpacity>
                    </View>
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
