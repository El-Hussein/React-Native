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
import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import bgSrc from './images/wallpaper.png';

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)
export default class Product extends React.Component{ 
    static navigationOptions= ({navigation}) =>({
        drawerLockMode: 'locked-closed',
        title: 'Category',
        headerRight:<TouchableOpacity onPress={() => navigation.goBack()}
        style={{backgroundColor:'orange', margin:10,padding:10}}>
        <Text style={{color:'#fff'}}>Back</Text></TouchableOpacity>		
    });
    constructor(props){
        super(props)
        this.state = {
            isLoading: true, 
            dataSource:this.props.navigation.getParam('products', []), 
            imagesSlider: [
                require('./images/1.jpg'),
                require('./images/2.jpg'),
                require('./images/3.jpg'),
            ] 
        }
    }
    
    render() {
        return (
        <View>
            <ScrollView style={{backgroundColor:'#CC542F'}}>
                <Header 
                    placement="left"
                    leftComponent={{ icon:'arrow-back', onPress:()=>this.props.navigation.goBack(), color: '#fff' }}
                    centerComponent={{ text: 'Product', style: { color: '#fff' } }}
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
                    <View>
                        <ImageBackground style={styles.element} source={{uri: item.image}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>{item.price}</Text>
                        </ImageBackground>
                    </View>
                }
                keyExtractor={item => toString(item.age)}
                numColumns={2}
                style={{flex:1}}
                /> 
            </ScrollView>
        </View>
        );
    }
}

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
        width: DEVICE_WIDTH / 2 - 10,
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
