import React from 'react';
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
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import bgSrc from './images/wallpaper.png';
import Product from './Product';
const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)
class Category extends React.Component{ 
    static navigationOptions= ({navigation}) =>({
        drawerLockMode: 'locked-closed',
        title: 'Category',
        headerRight:<TouchableOpacity onPress={() => navigation.goBack()}
        style={{backgroundColor:'orange', margin:10,padding:10}}>
        <Text style={{color:'#fff'}}>Back</Text></TouchableOpacity>		
    });
    constructor(props){
        super(props)
        alert("Category navigations object: " + JSON.stringify(props.navigation.state));
        this.state = {isLoading: true, dataSource:{}, imagesSlider: [
            require('./images/1.jpg'),
            require('./images/2.jpg'),
            require('./images/3.jpg'),
        ] }
    }
    
    async componentDidMount(){
        // this for header of body data is application/x-www-form-urlencoded
        var qs = require('qs');
        var result;
        alert(this.props.navigation.getParam('category_id', 60));
        return await axios.post('https://computershopegypt.com/android/product/category', qs.stringify({'category_id':this.props.navigation.getParam('category_id', 60)})) // this.props.navigation.getParam('category_id', 84)
        .then( (response) => {
            result = response.data;
            // alert(this.props.navigation.getParam('category_id', '84') + " : " + JSON.stringify(result));
            this.setState({
                isLoading: false,
                dataSource: result,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        const { navigate } = this.props.navigation;
        if(this.state.isLoading){
            return(
                <View style={styles.loaderContainer}>
                <Text>
                    this is Category Page.
                </Text>
                <ActivityIndicator/>
                </View>
            )
        }
        return (
        <View>
            <ScrollView style={[{backgroundColor:'#CC542F'}, {backgroundColor:'white'}]}>
                <Header 
                    placement="left"
                    leftComponent={{ icon:'arrow-back', onPress:()=>this.props.navigation.navigate('Home'), color: '#fff' }}
                    centerComponent={{ text: 'Category', style: { color: '#fff' } }}
                    // backgroundColor='#62AEFF'
                    backgroundColor='#CC542F'
                />  
                <View style={{height:300}}>
                    <Swiper height={300}> 
                    {
                        this.state.imagesSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }
                    </Swiper>
                </View>
                <FlatList 
                data={this.state.dataSource}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) =>
                    <View style={{justifyContent:'space-around', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{

                            if(item.products.length == 0)
                            {
                                alert('there no products for this sub cat!');
                            }else{
                                // alert(JSON.stringify(item.products));
                                navigate('Product', {products:item.products});
                                // console.warn('should navigate to new page.');
                            }

                        }}>
                            {/* <ImageBackground style={styles.element} source={{uri: item.image}}>
                                <Text style={styles.name}>{item.name}</Text>
                            </ImageBackground> */}
                            <View style={{padding:5, borderWidth: 1, borderColor:'red', borderRadius:5, margin:3}}>
                                <Image source={{uri: item.image}} style={{height:300 , marginHorizontal:10,width:DEVICE_WIDTH/2 - 40, }}/>
                                <View style={{borderBottomColor:'#eee', borderBottomWidth:1, marginHorizontal:10 ,width:DEVICE_WIDTH/2 - 80}}></View>
                                <Text style={{fontWeight:'bold', fontSize:20, margin:5, color:'orange'}}> {item.name} </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={item => toString(item.age)}
                numColumns={2}
                style={{flex:1,}}
                /> 
            </ScrollView>
        </View>
        );
    }
}

const CatNav = createStackNavigator({
    Category: {
        screen: Category,
        navigationOption:{
            title:"Category", 
        }
    },
    Product: {
        screen: Product,
        navigationOption:{
            title:"Product", 
        }
    }
},
{
    navigationOptions:{
        header: null,
    }
})

export default CatNav;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: DEVICE_WIDTH,
    },
    container: {
    //   marginTop: Platform.OS ==='android'? 25:0,
      flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    nav:{
        flex:0.15,
        backgroundColor: 'white',
        flexDirection:'row'
    },
    button:{
        borderColor: 'white',
        borderWidth: 100,
    },
    loaderContainer: {
        // marginTop: Platform.OS ==='android'? 25:0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        color: 'black',
    },
    element: {
        flex: 1,
        width: DEVICE_WIDTH / 2 - 20,
        height: null,
        height: 200,
        // padding: 20,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        margin: 5,
        backgroundColor: 'white',
        alignItems:'flex-end',
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'cover',
    }
});