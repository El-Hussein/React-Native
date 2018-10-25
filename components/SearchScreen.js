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

class SearchScreen extends Component{

    constructor(props) {
         super()
    }
    render() {
        return (
            <View style={styles.cartContainer}>
                <Icon name='search' size={50} color="#03535E"/>    
                <Text style={styles.textHead}>Search for Any product</Text>
                <Text style={styles.text}>Find your next favourite product</Text>
            </View>
        );
    }
}

export default SearchScreen

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
        marginTop:10,
    },
    textHead: {
        color: 'white',
        fontSize: 20,
        opacity: 0.8,
        color: "black",
        marginTop:10,
        fontWeight:"800",
    },
  })