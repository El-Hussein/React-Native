import React, {Component} from 'react'
import {
    View, Text
} from 'react-native';

class CompareScreen extends Component{

    constructor(props) {
         super()
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Compare!</Text>
            </View>
        );
    }
}

export default CompareScreen