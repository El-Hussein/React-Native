import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet, 
  ImageBackground, 
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableOpacity,
  Image, 
  View, 
  Text, 
  TextInput, 
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {  
  Icon,
} from 'react-native-elements';
import axios from 'axios';
import Localization from '../../localization/localization';

import bgSrc from '../images/wallpaper.png';
import logoImg from '../images/logo.png';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import { LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { addPlace } from '../../actions/plac';
import { sendMessage, updateDrawer } from '../../actions/auth';

class AuthHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email:'',
      password:'',
      authinticate: false,
      user: {},
    };
    this._localLogin = this._localLogin.bind(this);
    this._logout = this._logout.bind(this);
    this.showPass = this.showPass.bind(this);
    this._responseInfoCallback = this._responseInfoCallback.bind(this);
    this._signIn = this._signIn.bind(this);
    this.setAccessFaceBook = this.setAccessFaceBook.bind(this);
    this.setAccessGoogle = this.setAccessGoogle.bind(this);
  }

  componentDidMount(){
    GoogleSignin.configure();
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  async login(user){
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user)).then(()=>{
        this.setState({
          authinticate:true,
          user:user,
        })
      });
    }catch (e){
      console.warn("login error: " + e);
    }
    return user;
  }

  async setAccessFaceBook(access){
    try {
      await AsyncStorage.setItem('socialMediaLogin', JSON.stringify({access:access, sm:'fb'})).then(()=>{
        this.setState({
          authinticate:true,
          access:access,
          fblogin:true,
        })
      });
    }catch (e){
      console.warn("login error: " + e);
    }
    return access;
  }

  async setAccessGoogle(access){
    try {
      await AsyncStorage.setItem('socialMediaLogin', JSON.stringify({access:access, sm:'g'})).then(()=>{
        this.setState({
          authinticate:true,
          access:access,
          goooglelogin:true,
        })
      });
    }catch (e){
      console.warn("login error: " + e);
    }
    return access;
  }

  async _logout(){
    try {
      await AsyncStorage.removeItem('user').then(()=>{
        this.setState({
          authinticate:true,
          user:{},
          email:'',
          password:'',
        });
        alert("Godbye Sir we hope you come back later.");
      });
    }catch (e){
      console.warn("logout error: " + e);
    }
  }

  _localLogin() {  
      var qs = require('qs');
      alert('signing in please wait..');
      return axios.post('https://computershopegypt.com/android/account/Login', 
                                
                                  qs.stringify({
                                    'email':this.state.email, 
                                    'password':this.state.password,
                                  })
                                
                            )
      .then( (response) => {
        if(response.data.message){
          alert("Email or password invalid!");
        }else{
          // login with user
          this.login(response.data).then((back)=>{
            console.log('done Back: ' + JSON.stringify(back));
            this.props.navigation.navigate('UserProfile');
          });
        }
      })
      .catch(function (error) {
          console.log(error);
      });

  }

  setData(user){
    return async () => {
      try {
        await AsyncStorage.setItem('uesr', user);
      } catch (error) {
        // Error saving data
      }
    }
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + JSON.stringify(error));
    } else {
      this.setState({
        user: result
      });
      this.setData(result);
      alert('Result ' + JSON.stringify(result));
    }
  }

  _signIn (){
      try {
        GoogleSignin.hasPlayServices();
        GoogleSignin.signIn().then((userInfo)=>{
          this.setAccessGoogle(userInfo.accessToken);
          console.warn(JSON.stringify(userInfo));
          this.setState({ user : userInfo });
          this.props.send('Logged in');
          this.props.update(true);
        });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.warn("sign in cancelled");
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
          console.warn("already sign in");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.warn("play services not available");
        } else {
          console.warn("ERROR: " + error);
        }
      }
      this.props.navigation.navigate('UserProfile');
  }

  render() {
    var user = this.state.user;
    if(user.firstname){
      // alert(JSON.stringify(user));
      return (
        <ImageBackground style={styles.picture} source={bgSrc} >
          <View style={{padding:20 , alignItems:'flex-start'}}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Home');
                // this.props.navigation.state.params.onGoBack();
              }
              }>
                <Icon name="keyboard-backspace" size={30} color="white"/>
              </TouchableOpacity>
            </View>
          <View style={styles.splashContainer}>
            <Text style={styles.loginTtextHeader}> Welcome back MR/ </Text><Text style={styles.loginTtextHeaderName}> {user.firstname} </Text>
            <Text style={styles.loginTtext}> we are sorry but this page is still</Text>
            <Text style={styles.loginTtext}> under construction </Text>
            <ActivityIndicator color={'white'} size={50}/>
            <Text style={styles.loginTtext}> get poored!! </Text>
            <Text style={styles.loginTtext}> we are sorry :( </Text>
            <Text style={styles.loginTtext}> you can leave us and logout :( :( </Text>
            <TouchableOpacity
              style={[styles.button, {width:200, margin:20}]}
              onPress={this._logout}
              activeOpacity={1}>
              <Text> logout </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    }
    if(user.name){
      return (
        <ImageBackground style={styles.picture} source={bgSrc} >
          <View style={{padding:20 , alignItems:'flex-start'}}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Home');
                // this.props.navigation.state.params.onGoBack();
              }
              }>
                <Icon name="keyboard-backspace" size={30} color="white"/>
              </TouchableOpacity>
            </View>
          <View style={styles.splashContainer}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: user.picture.data.url}}
            />
            <Text style={styles.loginTtextHeader}> Welcome back MR/ </Text><Text style={styles.loginTtextHeaderName}> {user.name} </Text>
            <Text style={styles.loginTtext}> we are sorry but this page is still</Text>
            <Text style={styles.loginTtext}> under construction </Text>
            <ActivityIndicator color={'white'} size={50}/>
            <Text style={styles.loginTtext}> get poored!! </Text>
            <Text style={styles.loginTtext}> we are sorry :( </Text>
            <Text style={styles.loginTtext}> you can leave us and logout :( :( </Text>
            <TouchableOpacity
              style={[{width:200, margin:20}]}
              onPress={this._logout}
              activeOpacity={1}>
              <LoginButton onLogoutFinished={() => alert("logout.")}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    }
    if(user.user){
      return (
        <ImageBackground style={styles.picture} source={bgSrc} >
          <View style={{padding:20 , alignItems:'flex-start'}}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Home');
                // this.props.navigation.state.params.onGoBack();
              }
              }>
                <Icon name="keyboard-backspace" size={30} color="white"/>
              </TouchableOpacity>
            </View>
          <View style={styles.splashContainer}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: user.user.photo}}
            />
            <Text style={styles.loginTtextHeader}> Welcome back MR/ </Text><Text style={styles.loginTtextHeaderName}> {user.user.givenName} </Text>
            <Text style={styles.loginTtext}> we are sorry but this page is still</Text>
            <Text style={styles.loginTtext}> under construction </Text>
            <ActivityIndicator color={'white'} size={50}/>
            <Text style={styles.loginTtext}> get poored!! </Text>
            <Text style={styles.loginTtext}> we are sorry :( </Text>
            <Text style={styles.loginTtext}> you can leave us and logout :( :( </Text>
              <TouchableOpacity
              style={[styles.button, {width:200, margin:20}]}
              onPress={async () => {
                  try {
                    this.props.update(false);
                    await GoogleSignin.revokeAccess();
                    await GoogleSignin.signOut();
                    this.setState({ user: {} }); // Remember to remove the user from your app's state as well
                  } catch (error) {
                    console.error(error);
                  }
                }
              }
              activeOpacity={1}>
              <Text> logout </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    }
    else{
      return (
        <ImageBackground style={styles.picture} source={bgSrc} >
          <ScrollView>
            <View style={{padding:20 , alignItems:'flex-start'}}>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Home');
                // this.props.navigation.state.params.onGoBack();
                }
                }>
                <Icon name="keyboard-backspace" size={30} color="white"/>
              </TouchableOpacity>
            </View>
            {/* logo */}
            <View style={styles.logoContainer}>
              <Image source={logoImg} style={styles.logo} />
            </View>
            {/* form */}
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <UserInput
                source={usernameImg}
                placeholder="email"
                autoCapitalize={'none'}
                returnKeyType={'next'}
                autoCorrect={false}
                passText={(email)=>this.setState({email: email})}
                refData={(input)=>{this.emailInput = input}}
                onSubmitEditing = {()=>{this.passwordInput.focus()}}
                />
              <UserInput
                source={passwordImg}
                secureTextEntry={this.state.showPass}
                placeholder="Password"
                returnKeyType={'go'}
                autoCapitalize={'none'}
                autoCorrect={false}
                passText={(password)=>this.setState({password: password})}
                refData={(input)=>{this.passwordInput = input}}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnEye}
                onPress={this.showPass}>
                <Image source={eyeImg} style={styles.iconEye} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this._localLogin}
                activeOpacity={1}>
                  <Text style={styles.text}>LOGIN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>

            <View style={{justifyContent:'center', alignItems:'center',}}>

              <LoginButton
              readPermissions={['public_profile']}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
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
                }
              }
              onLogoutFinished={() => alert("logout.")}/>

              <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
              disabled={this.state.isSigninInProgress} />
            </View>

            {/* SignUp */}
            <View style={styles.signUpContainer}>
              <Text style={styles.text} onPress={()=>this.props.navigation.navigate('Register')}>Create Account</Text>
              <Text style={styles.text} onPress={()=>this.props.navigation.navigate('ForgetPassword')}>Forgot Password?</Text>
            </View>
          </ScrollView>
        </ImageBackground>
      );
    }
  }
}


class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          ref={this.props.ref}
          onSubmitEditing={this.props.onSubmitEditing}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={this.props.passText}
          ref={this.props.refData}
        />
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    // resizeMode: 'cover',
  },logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 80,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: '#62AEFF'
    // backgroundColor: '#CC542F'
  },
  loginTtext: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "300",
    opacity: 0.7
  },
  loginTtextHeader: {
    color: "red",
    fontSize: 20,
    fontWeight: "300",
    opacity: 0.6
  },
  loginTtextHeaderName: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 65,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    // flex: 1,
    marginBottom: 15,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  signUpContainer: {
    flex: 1,
    // top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
    marginHorizontal: 20,
    marginBottom: 20
  },
  image: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 60,
    height: 60,
  },
  googleHeader: {
    backgroundColor: 'red'
  }
});
const mapStateToProps = state => {
	return {
	  places: state.places.places,
	  message: state.auth.message
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
	  add: (name) => {
		dispatch(addPlace(name))
	  },
	  send: (message)=>{
		dispatch(sendMessage(message))
	  },
	  update: (update)=>{
		dispatch(updateDrawer(update))
	  }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthHome)
 