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
import { Header, CheckBox } from 'react-native-elements';
import Localization from '../../localization/localization';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import header_bg from '../../components/images/header_bg.jpg'
import logo from '../../components/images/CompuMe.png';
import user from '../../components/images/key.png';
import log from '../../components/images/log.png';
import lock from '../../components/images/lock.png';
import search from '../../components/images/search.png';
import contact_num from '../../components/images/contact_num.png';
import {LocalImageProduct, LocalImageBrand, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct_1} from '../../components/LocalImage';
// import Grading from 'react-native-grading';
import { LoginButton,AccessToken,GraphRequest,GraphRequestManager,LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import reviewBG from '../../components/images/review.jpg';
import backGround from '../../components/images/back_g.jpg';

import cat1_image from '../../components/images/cat_1.png';
import cat2_image from '../../components/images/cat_2.png';
import cat3_image from '../../components/images/cat_3.png';

import sponser1 from '../../components/images/sponser1.png';
import sponser2 from '../../components/images/sponser2.png';
import sponser3 from '../../components/images/sponser3.png';
import sponser4 from '../../components/images/sponser4.png';
import sponser5 from '../../components/images/sponser5.png';

class Login extends Component{

    constructor(props) {
         super()
         this.state = {
             checked:false,
         }
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
             <ImageBackground source={backGround} style={{height:hp('100%'), width:wp('100%')}} resizeMode="stretch">
                <TouchableOpacity style={{position:'absolute', top:hp('9%'), left:wp('5%')}} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Icon name="arrow-left" size={wp('5%')} color="#03426D"/>
                </TouchableOpacity>

                <Image source={logo} resizeMode="contain" style={{width:wp('69%'), height:hp('10.8%'), position:'absolute', top:hp('6%'), left:wp('16%')}}/>
                <View style={{paddingHorizontal:25, height:hp('34%'), marginTop: hp('16%')}}>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{fontWeight:'300', fontSize:26, color:'black'}} >{Localization.login}</Text>
                        <Image source={user} style={{width:DW/8.5, height:DW/8.5, position:'relative', left:0}}/>
                    </View>
                    <View style={{flexDirection:'row'}} >
                        <Text style={{fontWeight:'400', fontSize:14, color:'black'}} >{Localization.dontHaveAccount} </Text>
                        <TouchableOpacity>
                            <Text style={{color:'#03426D'}}>{Localization.createNow} </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:hp('1%')}} >
                        <TextInput
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('6.6%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder={Localization.firstName}
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
                            style={{backgroundColor:'#D2D2D2', width:wp('84%'), borderRadius:4, height:hp('6.6%'), position:'relative', left:wp('11%'), paddingHorizontal:10, fontSize:18, color:'white'}}
                            placeholder={Localization.firstName}
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
                            <Icon name="lock" size={wp('8%')} color="white"/>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginVertical:hp('2.5%')}}>
                        <CheckBox
                        title={Localization.rememberMe}
                        checked={this.state.checked}
                        checkedColor='#03426D'
                        uncheckedColor='#03426D'
                        containerStyle={{backgroundColor: 'rgba(52, 52, 52, 0.0)', borderWidth:0, padding:0, margin:0}}
                        textStyle={{color:'black'}}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        style={{padding:0, position:'absolute', top:0, margin:0}}
                        />
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Forget');}}>
                            <Text style={{color:'black', fontWeight:'500'}}> {Localization.forgetPassword} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        {/* <TouchableOpacity style={{backgroundColor:'#39496B', borderRadius:3, width:100, padding:8, flexDirection:'row', justifyContent:'center'}}> */}
                        <TouchableOpacity style={{backgroundColor:'#39496B', borderRadius:3, width:wp('40%'), padding:4, flexDirection:'row', justifyContent:'center'}}>
                            {/* <Icon name='sign-in'  size={20} color='white'/> */}
                            <Icon name='sign-in'  size={25} color='white'/>
                            {/* <Text style={{color:'white', fontWeight:'bold', fontSize:14}}> login </Text> */}
                            <Text style={{color:'white', fontWeight:'bold', fontSize:16}}> {Localization.login} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', height:hp('16%'), marginTop:wp('2%')}}>
                    <Text style={{color:'white', fontSize:wp('15%'), fontFamily:'custom'}}> or </Text>
                </View>
                <View style={{height:hp('21%'), justifyContent:'space-around', alignItems:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('-1%')}}>
                        {/* <TouchableOpacity style={{backgroundColor:'#39496B', borderRadius:3, width:100, padding:8, flexDirection:'row', justifyContent:'center'}}> */}
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Register');}} style={{backgroundColor:'#39496B', borderRadius:3, width:wp('40%'), padding:4, flexDirection:'row', justifyContent:'center'}}>
                            {/* <Icon name='sign-in'  size={20} color='white'/> */}
                            <Icon name='sign-in'  size={25} color='white'/>
                            {/* <Text style={{color:'white', fontWeight:'bold', fontSize:14}}> login </Text> */}
                            <Text style={{color:'white', fontWeight:'bold', fontSize:16}}> {Localization.signup} </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection:'row', backgroundColor:'#3C5A9A', justifyContent:'center', alignItems:'center', height:hp('7%'), borderRadius:5, width:wp('70%')}}>
                            <Icon name="facebook-square" size={40} color="white" style={{paddingHorizontal:4, marginLeft:2}}/>
                            <Text style={{color:'white', fontSize:18, fontWeight:'bold', paddingRight:16, paddingLeft:4, justifyContent:'center', alignItems:'center'}}>{Localization.continueWithFacebook}</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={{ flexDirection:'row', backgroundColor:'#CB4738', justifyContent:'center', alignItems:'center', height:hp('7%'), borderRadius:5, width:wp('70%')}}>
                        <Icon name="google-plus-square" size={40} color="white" style={{paddingHorizontal:4}}/>
                        <Text style={{color:'white', fontSize:18, fontWeight:'bold', paddingRight:16, paddingLeft:4, justifyContent:'center', alignItems:'center'}}>{Localization.continueWithGoogle}</Text>
                    </TouchableOpacity>
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
