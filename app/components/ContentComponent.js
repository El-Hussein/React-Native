import React, {Component} from 'react'
import { ImageBackground, AsyncStorage, Image ,ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginManager,LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Localization from '../localization/localization';
import { LocalImageProfile, LocalImageMenuCategory } from './LocalImage';

import login_bg from '../components/images/login_bg.png';
import menu_bg from '../components/images/menu_bg.png';
import username from '../components/images/username.png';
import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

class ContentComponent extends Component{

  static navigationOptions= ({navigation}) =>({
    title: 'All Categories',
    navigationOptions:{
      headerRight:<TouchableOpacity onPress={() => navigation.goBack()}
      style={{backgroundColor:'orange', margin:10,padding:10}}>
      <Text style={{color:'#fff'}}>Home</Text></TouchableOpacity>
    }
  });

    constructor(props){
      super(props)
      this.state = {
        isLoading: true,
        socialAccess: {test:"TEST"},
        socialType: 'google',
        user: {name:'hi', user:{photo:login_bg}},
        updated: false,
        categories: [
          {image:{src: cat1_image, width:2480, height:3508}, name:Localization.offers},
          {image:{src: cat2_image, width:2480, height:3508}, name:Localization.orange},
          {image:{src: cat1_image, width:2480, height:3508}, name:Localization.computer},
          {image:{src: cat3_image, width:200, height:200}, name:Localization.electronics},
          {image:{src: cat2_image, width:2480, height:3508}, name:Localization.comunications},
        ],
      }
      this._signIn = this._signIn.bind(this);
      this.getAccessToken = this.getAccessToken.bind(this);


    }
    
    _signIn (){
      try {
        GoogleSignin.hasPlayServices();
        GoogleSignin.signIn().then((userInfo)=>{
          this.setState({ user : userInfo });
          console.log(JSON.stringify("from signIn: " + JSON.stringify(this.state.user)));
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
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.message && !nextProps.updated){
        alert(nextProps.message);
        this.componentDidMount();
      }
    }

    async getAccessToken(){
      user = await AsyncStorage.getItem('socialMediaLogin');
      if(user){
        this._signIn();
        console.log("getAccessToken: " + user);
        return user;
      }else{
        return null;
      }
    }

    componentDidMount(){
      if(this.state.updated == false){
        GoogleSignin.configure();
        this.getAccessToken().then((data)=>JSON.parse(data)).then((dataObj)=>{
          this.setState({
            socialAccess: dataObj.access,
            socialType: dataObj.sm,
          })
          console.warn("component: " + this.state.socialAccess);
        });
        return fetch('https://computershopegypt.com/android/home/menu')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.menu,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    }

    render() {
      const { navigate } = this.props.navigation;
      let widthCount = 1 + this.state.categories.length;
      if(true){
        return(
          // <View style={styles.loaderContainer}>
          //   <ActivityIndicator/>
          //   <Text> Loading...</Text>
          // </View>
          <View style={{flex:1}}>
            <ImageBackground source={menu_bg} style={{ flex:1}}>
              <View style={{flex:2}}>
                  <ImageBackground source={login_bg} style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                    <LocalImageProfile source={username} originalWidth={48} originalHeight={48}/>
                    <Text style={{color:'white', opacity:0.9, fontSize:wp('7%'), fontWeight:'bold'}}> {Localization.welcome} </Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserNavigator')}>
                      <Text style={{color:'white', opacity:0.9, fontSize:wp('7%'), fontWeight:'bold'}}> Hussein </Text>
                    </TouchableOpacity>
                  </ImageBackground>
              </View>
              <View style={{flex:5}}>
                <FlatList 
                  data={this.state.categories}
                  renderItem={({item}) =>
                    <View style={{marginRight:wp(((--widthCount * 15)/411.4*100).toString() + '%'), marginVertical: hp((2.5/683.4*100).toString() + '%')}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Category')} style={{justifyContent:'space-between' ,backgroundColor:"#03507E", paddingHorizontal:wp(((3)/411.4*100).toString() + '%'), borderTopRightRadius:wp(((4)/411.4*100).toString() + '%'), borderBottomRightRadius:wp(((4)/411.4*100).toString() + '%'),  flexDirection:'row', alignItems:'center'}}>
                          <Text style={{color:'white', fontSize:wp('5.5%'), fontWeight:'bold', marginLeft:wp(((10)/411.4*100).toString() + '%')}}>{item.name}</Text>
                          <LocalImageMenuCategory source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        </TouchableOpacity>
                    </View>
                    // widthCount+=10;
                  }
                  
                  keyExtractor={item => toString(item.name)}
                  style={{flex:1, marginTop:wp(((40)/411.4*100).toString() + '%'),}}
                />
              </View>
              <View style={{flex:1}}>
                <View style={{flexDirection:'row', marginLeft:wp("5%")}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="user-circle" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.myAccount} </Text>
                  </View>
                  <View style={{marginLeft:wp("5%"), flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="file" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.newFeed} </Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', marginLeft:"5%"}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="heart" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.myWishList} </Text>
                  </View>
                  <View style={{marginLeft:"5%", flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="undo" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.returnPolicy} </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View> 
        )
      }
      else if(!this.state.isLoading){
        return(
          // <View style={styles.loaderContainer}>
          //   <ActivityIndicator/>
          //   <Text> Loading...</Text>
          // </View>
          <View style={{flex:1}}>
            <ImageBackground source={menu_bg} style={{ flex:1}}>
              <View style={{flex:2}}>
                  <ImageBackground source={login_bg} style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                    <LocalImageProfile source={username} originalWidth={48} originalHeight={48}/>
                    <Text style={{color:'white', opacity:0.9, fontSize:wp('7%'), fontWeight:'bold'}}> {Localization.welcome} </Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AuthNavigator')}>
                      <Text style={{color:'white', opacity:0.9, fontSize:wp('7%'), fontWeight:'bold'}}> {Localization.loginSignup} </Text>
                    </TouchableOpacity>
                  </ImageBackground>
              </View>
              <View style={{flex:5}}>
                <FlatList 
                  data={this.state.categories}
                  renderItem={({item}) =>
                    <View style={{marginRight:wp(((--widthCount * 15)/411.4*100).toString() + '%'), marginVertical: hp((2.5/683.4*100).toString() + '%')}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Category')} style={{justifyContent:'space-between' ,backgroundColor:"#03507E", paddingHorizontal:wp(((3)/411.4*100).toString() + '%'), borderTopRightRadius:wp(((4)/411.4*100).toString() + '%'), borderBottomRightRadius:wp(((4)/411.4*100).toString() + '%'),  flexDirection:'row', alignItems:'center'}}>
                          <Text style={{color:'white', fontSize:wp('5.5%'), fontWeight:'bold', marginLeft:wp(((10)/411.4*100).toString() + '%')}}>{item.name}</Text>
                          <LocalImageMenuCategory source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        </TouchableOpacity>
                    </View>
                    // widthCount+=10;
                  }
                  
                  keyExtractor={item => toString(item.name)}
                  style={{flex:1, marginTop:wp(((40)/411.4*100).toString() + '%'),}}
                />
              </View>
              <View style={{flex:1}}>
                <View style={{flexDirection:'row', marginLeft:wp("5%")}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="user-circle" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.myAccount} </Text>
                  </View>
                  <View style={{marginLeft:wp("5%"), flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="file" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.newFeed} </Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', marginLeft:"5%"}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="heart" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.myWishList} </Text>
                  </View>
                  <View style={{marginLeft:"5%", flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name="undo" size={wp(((20)/411.4*100).toString() + '%')} color='white'/>
                    <Text style={{color:'white', fontSize:wp('4.3%'), margin:wp(((7)/411.4*100).toString() + '%'), fontWeight:'bold'}}> {Localization.returnPolicy} </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View> 
        )
      }
      else if(this.state.socialAccess === null){
        return (
          <ScrollView>
            <View style={styles.authView}>
              <Image
                source={require('./images/profile.png')}
                style={{width:50, height:50, margin:20, borderRadius:50}}
                />
              <TouchableOpacity onPress={()=>{
                  alert('clicked');
                  navigate('AuthNavigator');
                }
              }>
                <Text> {Localization.loginSignup} </Text> 
              </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.container}>
                  <FlatList 
                  data={this.state.dataSource}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) =>
                    <TouchableOpacity 
                    onPress={() => {
                      alert(item.category_id);
                      navigate('Category', {category_id: item.category_id})
                    }}
                    >
                      <View style={styles.element}>
                          <Text style={styles.name}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                  keyExtractor={item => item.category_id}
                />
            </SafeAreaView>
          </ScrollView>
        );
      }
      else if(this.state.user|| true){

        return (
          <ScrollView>
            <View style={styles.authView}>
            <TouchableOpacity onPress={()=> {this.props.navigation.navigate('UserProfile');}}>
              <Image
                source={{source: this.state.user.user.photo}}
                style={{width:50, height:50, margin:20, borderRadius:50}}
                />
              <Text> {this.state.user.user.name} here now </Text> 
            </TouchableOpacity>
              <TouchableOpacity
              style={[styles.button, {width:200, margin:20}]}
              onPress={async () => {
                  try {
                    await GoogleSignin.revokeAccess();
                    await GoogleSignin.signOut();
                    this.setState({ user: null, socialAccess:null, updated:false }); // Remember to remove the user from your app's state as well
                  } catch (error) {
                    console.error(error);
                  }
                  AsyncStorage.removeItem('socialMediaLogin').then(()=>{console.warn('deleted')});
                  this.setState({
                    socialAccess: null,
                    socialType: '',
                  });
                }
              }
              activeOpacity={1}>
              <Text> {Localization.logout} </Text>
            </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.container}>
                  <FlatList 
                  data={this.state.dataSource}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) =>
                    <TouchableOpacity 
                    onPress={() => {
                      alert(item.category_id);
                      navigate('Category', {category_id: item.category_id})
                    }}
                    >
                      <View style={styles.element}>
                          <Text style={styles.name}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                  keyExtractor={item => item.category_id}
                />
            </SafeAreaView>
          </ScrollView>
        );
      }
      else{
        return(
          <LoginButton onLogoutFinished={async () => {
            try {
              this.setState({ user: null, socialAccess:null }); // Remember to remove the user from your app's state as well
            } catch (error) {
              console.error(error);
            }
            AsyncStorage.removeItem('socialMediaLogin').then(()=>{console.warn('deleted')});
            this.setState({
              socialAccess: null,
              socialType: '',
            });
          }
        }/>
        );
      }
  }
}

const mapStateToProps = state => {
	return {
	  places: state.places.places,
    message: state.auth.message,
    updated: state.auth.updated,
	}
}
  
const mapDispatchToProps = dispatch => {
	return {
	  add: (name) => {
		dispatch(addPlace(name))
	  },
	  send: (message)=>{
		dispatch(sendMessage(message))
	  }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)

const styles = StyleSheet.create({
    menuCategory:{
      backgroundColor:"#03436A",
      
    },
    container: {
      flex: 1,
      backgroundColor:"#CC542F"
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    h2text: {
      marginTop: 10,
      fontSize: 36,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 20,
      color: 'black',
    },
    element: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#eee',
      borderBottomWidth: 2,
      backgroundColor: 'rgb(255,202,124)',
    },
    authView:{
      backgroundColor: '#eee',
      flex:1,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: "black",
      justifyContent: 'center',
      alignItems:'center'
    }
})