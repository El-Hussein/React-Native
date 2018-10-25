import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';

class FavouriteScreen extends Component{

    constructor(props) {
         super()
    }
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='favorite' size={50} color="#03535E"/>    
            <Text style={styles.text}>You don't have any favourite product yet</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white'}}>Do it Now</Text>  
            </TouchableOpacity>
        </View>
        );
    }
}

export default FavouriteScreen

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cartContainer: {
        flexGrow: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        // backgroundColor: '#62AEFF'
    },
    text: {
        color: 'white',
        fontSize: 15,
        opacity: 0.4,
        color: "black",
    },
    button: {
        marginTop:20,
        // backgroundColor: "blue",
        backgroundColor: "#393917",
        borderRadius: 20,
        padding: 10,
        width: 150, 
        alignItems: 'center',
    }
  })