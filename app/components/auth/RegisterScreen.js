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
import bgSrc from '../images/wallpaper.png';
import logoImg from '../images/logo.png';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Wallpaper extends Component {
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
    this.showPass = this.showPass.bind(this);
    this.showPass2 = this.showPass2.bind(this);
  }

  componentDidMount(){
    return fetch('https://computershopegypt.com/android/account/Countries')
      .then((response) => response.json())
      .then((responseJson) => {        
        this.setState({
          countries: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  async fetchZonies(c_id){
    if(c_id === 0) return;
    // console.warn("country id: " + c_id);
    return await fetch('https://computershopegypt.com/android/account/zonies?country_id=' + c_id)
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(responseJson);        
        this.setState({
          zonies: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
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
    var countryData = [];
    if(this.state.countries.length){
      for(let i=0; i< this.state.countries.length; i++){
        countryData.push(<Picker.Item key={this.state.countries[i].country_id} label={this.state.countries[i].name} value={this.state.countries[i].name} />);
      }
    }else{
      countryData = <Picker.Item label="loading data..." value="loading data..." key={1}/>;
    }

    var zoneData = [];
    if(this.state.zonies){
      zoneData.push(<Picker.Item label="Zone" value="Zone" key={0}/> );
      for(let i=0; i< this.state.zonies.length; i++){
        zoneData.push(<Picker.Item key={this.state.zonies[i].zone_id} label={this.state.zonies[i].code} value={this.state.zonies[i].code} />);
      }
    }else{
      zoneData.push(<Picker.Item label="Zone -select country first-" value="Zone -select country first-" key={0}/> );
    }

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
              placeholder="firstName"
              autoCapitalize={'none'}
              returnKeyType={'next'}
              autoCorrect={false}
              passText={(firstName)=>this.setState({firstName: firstName})}
              refData={(input)=>{this.firstNameInput = input}}
              onSubmitEditing = {()=>{this.lastNameInput.focus()}}
              />
            <UserInput
              source={usernameImg}
              placeholder="lastName"
              autoCapitalize={'none'}
              returnKeyType={'next'}
              autoCorrect={false}
              passText={(lastName)=>this.setState({lastName: lastName})}
              refData={(input)=>{this.lastNameInput = input}}
              onSubmitEditing = {()=>{this.EmailInput.focus()}}
              />
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
              onSubmitEditing = {()=>{this.addressInput.focus()}}
              />
            <UserInput
              source={usernameImg}
              placeholder="address"
              autoCapitalize={'none'}
              returnKeyType={'next'}
              autoCorrect={false}
              passText={(address)=>this.setState({address: address})}
              refData={(input)=>{this.addressInput = input}}
              onSubmitEditing = {()=>{this.newsletterInput.focus()}}
              />
            <UserInput
              source={usernameImg}
              placeholder="newsletter"
              autoCapitalize={'none'}
              returnKeyType={'next'}
              autoCorrect={false}
              passText={(newsletter)=>this.setState({newsletter: newsletter})}
              refData={(input)=>{this.newsletterInput = input}}
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
            <View style={{borderRadius:10, marginBottom:20}}>
              <Picker
                selectedValue={this.state.selectedCountry}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) => {
                    if(itemIndex !== 0){
                      this.setState({country_id: this.state.countries[itemIndex-1].country_id, selectedCountry: itemValue});
                      this.fetchZonies(itemIndex);
                    }
                  }
                }>

                <Picker.Item label={this.state.selectedCountry} value={this.state.selectedCountry} key={0}/>
                {countryData}
              </Picker>
            </View>
            <View style={{borderRadius:10, marginBottom:20}}>
            <Picker  selectedValue={this.state.selectedZone}  style={styles.input}  onValueChange={(itemValue, itemIndex) => this.setState({zone_id: itemIndex, selectedZone:itemValue})}>  
              {zoneData}
            </Picker>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPress}
              activeOpacity={1}>
                <Text style={styles.text}>Register</Text>
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