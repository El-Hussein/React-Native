import React, {Component} from 'react'
import { AsyncStorage, Image ,ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import LocalImage from './LocalImage'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginManager,LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';

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
        socialAccess: null,
        socialType: '',
        user: null,
        updated: false,
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

    backD(){
      console.warn("reached Home successfully");
    }

    render() {
      const { navigate } = this.props.navigation;
      if(this.state.isLoading){
        return(
          <View style={styles.loaderContainer}>
            <ActivityIndicator/>
            <Text> Loading...</Text>
          </View>
        )
      }
      if(this.state.socialAccess === null){
        return (
          <ScrollView>
            <View style={styles.authView}>
              <Image
                source={require('./images/profile.png')}
                style={{width:50, height:50, margin:20, borderRadius:50}}
                />
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreen', {BACK1:()=>this.backD().bind(this)})}>
                <Text> Login / register </Text> 
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
      else if(this.state.user){

        return (
          <ScrollView>
            <View style={styles.authView}>
            <TouchableOpacity onPress={()=> {this.props.navigation.navigate('UserProfile');}}>
              <Image
                source={{uri: this.state.user.user.photo}}
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
              }
              activeOpacity={1}>
              <Text> logout </Text>
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

export default ContentComponent

const styles = StyleSheet.create({
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