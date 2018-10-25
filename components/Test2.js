import React, {Component} from 'react'
import {
    View, Text, Button
} from 'react-native';

class Test2 extends Component{

    static navigationOption = () => ({
        title: 'Test2',
        header: null
    });

    constructor(props) {
         super()
    }
    render () {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> This is just test2 page!! </Text>
                <Button title="Go To Test" onPress = {()=> navigate('Test')} />   
            </View>
        )
    }
}

export default Test2