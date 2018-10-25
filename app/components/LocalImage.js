import React, { Component } from 'react'

import {
    Image,
    Dimensions
} from 'react-native'


export const LocalImage = ({source, originalWidth, originalHeight}) => {
    let widthChange = (40)/originalWidth
    let heightChange = (30)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{marginBottom:1 ,width: newWidth, height:newHeight, borderRadius: 5, flex:1, resizeMode:'cover'}}/>
    )
}

export const LocalImageBig = ({source, originalWidth, originalHeight}) => {
    let widthChange = (30)/originalWidth
    let heightChange = (53)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{marginBottom:2 ,width: newWidth, height:newHeight, borderRadius: 5, flex:1, resizeMode:'stretch'}}/>
    )
}

export const LocalImageProfile = ({source, originalWidth, originalHeight}) => {
    let widthChange = (80)/originalWidth
    let heightChange = (80)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange 

    return (
        <Image source={source} style={{width: newWidth, height:newHeight, borderRadius: 5,}}/>
    )
}

export const LocalImageMenuCategory = ({source, originalWidth, originalHeight}) => {
    let widthChange = (45)/originalWidth
    let heightChange = (45)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange 

    return (
        <Image source={source} style={{width: newWidth, height:newHeight, marginVertical:5, marginHorizontal:10}}/>
    )
}

export const SponserImage = ({source, originalWidth, originalHeight}) => {
    let widthChange = (40)/originalWidth
    let heightChange = (12)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{margin:2 ,width: newWidth, height:newHeight, borderRadius: 5, flex:1, resizeMode:'stretch', opacity:0.5}}/>
    )
}

export const LocalImageCategoryIcon = ({source, originalWidth, originalHeight}) => {
    let widthChange = (30)/originalWidth
    let heightChange = (20)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width: newWidth, height:newHeight, marginLeft:10}}/>
    )
}

export const LocalImageSubCategoryProduct = ({source, originalWidth, originalHeight}) => {
    let widthChange = (60)/originalWidth
    let heightChange = (70)/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width: newWidth, height:newHeight}}/>
    )
}
// export default LocalImage