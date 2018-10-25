import React, {Component} from 'react'
import {
    View, Text, Button
} from 'react-native';

class Test extends Component{

    static navigationOption = () => ({
        title: 'Test',
        header: null
    });

    constructor(props) {
         super()
    }
    render () {
        const {navigate} = this.props.navigation;
         return (
             <View>
                 <Text> This is just test page!! </Text>
                 <Button title="Go To Test2" onPress = {()=> navigate('Test2')} />   
             </View>
         )
    }
}

export default Test