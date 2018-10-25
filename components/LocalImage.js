import React, { Component } from 'react'

import {
    Image,
    Dimensions
} from 'react-native'


const LocalImage = ({source, originalWidth}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-20)/originalWidth
    let newWidth = originalWidth * widthChange

    return (
        <Image source={source} style={{width: newWidth, borderRadius: 5, flex:1, resizeMode:'stretch'}}/>
    )
}

export default LocalImage