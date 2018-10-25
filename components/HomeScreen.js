import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';


const Slider = props => ( <View style={styles.imageContainer}>
    <Image style={styles.image} source={props.uri}/>
</View>
)

class HomeScreen extends Component{

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

    render () {
         return (
             <View>
                 <View style={{height:200}}>
                    <Swiper height={200}> 
                    {
                        this.state.imagesSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }
                    </Swiper>
                </View>
             </View>
         )
    }
}

export default HomeScreen

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