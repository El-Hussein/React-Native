import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground, KeyboardAvoidingView,
AsyncStorage,
TouchableOpacity,
Image, 
View, 
Text, 
TextInput, 
ScrollView,
Picker,
} from 'react-native';

import axios from 'axios';
import bgSrc from './images/wallpaper.png';
import logoImg from './images/logo.png';
import usernameImg from './images/username.png';
import passwordImg from './images/password.png';
import eyeImg from './images/eye_black.png';
import email from 'react-native-email'

export default class ForgetPassword extends Component {
constructor(props) {
    super(props);
    this.state = {
    showPass: true,
    press: false,
    showPass2: true,
    press2: false,
    email:'',
    firstName:'',
    lastName:'',
    telephone:'',
    address:'',
    newsletter:'',
    country_id: '',
    zone_id: '',
    password:'',
    confirmPassword:'',
    selectedCountry:'Country',
    selectedZone:'Zone -select country first-',
    countries: [],
    zonies: null,
    };
    this._onPress = this._onPress.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.showPass = this.showPass.bind(this);
    this.showPass2 = this.showPass2.bind(this);
}

showPass() {
    this.state.press === false
    ? this.setState({showPass: false, press: true})
    : this.setState({showPass: true, press: false});
}

showPass2() {
    this.state.press2 === false
    ? this.setState({showPass2: false, press2: true})
    : this.setState({showPass2: true, press2: false});
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

handleEmail = () => {
    const to = ['hu.sa8669@email.com', 'hussin.salah@computershopegypt.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'hu.sa8669"gmail.com', // string or array of email addresses
        subject: 'Update Password',
        body: 'You have asked to update your password please verify code 2354'
    }).catch(console.error)
}

_onPress() {  
    if(this.state.password !== this.state.confirmPassword){
        alert('password doesn\'t match!');
        return;
    }
    // alert(JSON.stringify(this.state));
    var qs = require('qs');
    return axios.post('https://computershopegypt.com/android/account/register', 
                    qs.stringify({
                    'firstname':this.state.firstName, 
                    'lastname':this.state.lastName, 
                    'email':this.state.email, 
                    'telephone':this.state.telephone, 
                    'address_1':this.state.address, 
                    'country_id':this.state.country_id,
                    'zone_id':this.state.zone_id,
                    'password':this.state.password,
                    'newsletter':this.state.newsletter, 
                    })
                )
    .then( (responseJson) => {
        // alert(JSON.stringify(responseJson));
        if(responseJson.data.message){
            alert('please fill all required data!');
        }else if(responseJson.data == ""){
            alert('email already exist!');
        }else{
            // alert(JSON.stringify(responseJson.data));
            this.setData(responseJson.data);
            this.props.navigation.goBack();
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

render() {
    return (
    <ImageBackground style={styles.picture} source={bgSrc} >
        <ScrollView>
        {/* logo */}
        <View style={styles.logoContainer}>
            <Image source={logoImg} style={styles.logo} />
        </View>
        {/* form */}
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <UserInput
            source={usernameImg}
            placeholder="Email"
            autoCapitalize={'none'}
            returnKeyType={'next'}
            autoCorrect={false}
            passText={(Email)=>this.setState({email: Email})}
            refData={(input)=>{this.EmailInput = input}}
            onSubmitEditing = {()=>{this.telephoneInput.focus()}}
            />

            <UserInput
            source={usernameImg}
            placeholder="telephone"
            autoCapitalize={'none'}
            returnKeyType={'next'}
            autoCorrect={false}
            passText={(telephone)=>this.setState({telephone: telephone})}
            refData={(input)=>{this.telephoneInput = input}}
            onSubmitEditing = {()=>{this.passwordInput.focus()}}
            />
            
            <UserInput
            source={passwordImg}
            secureTextEntry={this.state.showPass}
            placeholder="New Password"
            returnKeyType={'go'}
            autoCapitalize={'none'}
            autoCorrect={false}
            passText={(password)=>this.setState({password: password})}
            refData={(input)=>{this.passwordInput = input}}
            onSubmitEditing = {()=>{this.confirmPasswordInput.focus()}}
            />
            <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnEye}
            onPress={this.showPass}>
            <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>

            <UserInput
            source={passwordImg}
            secureTextEntry={this.state.showPass2}
            placeholder="Confirm Password"
            returnKeyType={'go'}
            autoCapitalize={'none'}
            autoCorrect={false}
            passText={(confirmPassword)=>this.setState({confirmPassword: confirmPassword})}
            refData={(input)=>{this.confirmPasswordInput = input}}
            />
            <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnEye2}
            onPress={this.showPass2}>
            <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.button}
            onPress={this.handleEmail}
            activeOpacity={1}>
                <Text style={styles.text}>Update Password</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
        </ScrollView>
    </ImageBackground>
    );
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
const DEVICE_HEIGHT = Dimensions.get('window').height;
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
text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
},formContainer: {
    flex: 1,
    alignItems: 'center',
},
btnEye: {
    position: 'absolute',
    top: 337,
    right: 28,
},
btnEye2: {
    position: 'absolute',
    top: 392,
    right: 28,
},
iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
},input: {
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
});