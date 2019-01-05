// h 683.4
// w 411.4

import React, { Component } from 'react'

import {
    Image,
    Dimensions
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';


export const LocalImage = ({source, originalWidth, originalHeight}) => {
    let widthChange = 40/originalWidth
    let heightChange = 30/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{marginBottom:hp((1/683.4*100).toString() + '%') ,width: wp((newWidth/411.4*100).toString() + '%'), height:hp((newHeight/683.4*100).toString() + '%'), borderRadius: wp((5/411.4*100).toString() + '%'), flex:1, resizeMode:'contain'}}/>
    )
}

export const LocalImageBrand = ({source, originalWidth, originalHeight}) => {
    let widthChange = 35/originalWidth
    let heightChange = 35/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{ width:wp((newWidth/411.4*100).toString() + '%') , height:hp((newHeight/683.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}

export const LocalImageBig = ({source, originalWidth, originalHeight}) => {
    let widthChange =30/originalWidth
    let heightChange =53 /originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{marginBottom:wp((2/411.4*100).toString() + '%') ,width:  wp((newWidth/411.4*100).toString() + '%'), height:hp((newHeight/683.4*100).toString() + '%'), borderRadius: wp((5/411.4*100).toString() + '%'), flex:1, resizeMode:'contain'}}/>
    )
}

export const LocalImageProfile = ({source, originalWidth, originalHeight}) => {
    let widthChange =80/originalWidth
    let heightChange =80/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange 

    return (
        <Image source={source} style={{width:  wp((newWidth/411.4*100).toString() + '%'), height: hp((newHeight/683.4*100).toString() + '%'), borderRadius: wp((5/411.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}

export const LocalImageMenuCategory = ({source, originalWidth, originalHeight}) => {
    let widthChange = 45/originalWidth
    let heightChange =45/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange 

    return (
        <Image source={source} style={{width: wp((newWidth/411.4*100).toString() + '%'), height: hp((newHeight/683.4*100).toString() + '%'), marginVertical:hp((5/683.4*100).toString() + '%'), marginHorizontal:wp((10/411.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}

export const SponserImage = ({source, originalWidth, originalHeight}) => {
    let widthChange =40/originalWidth
    let heightChange =12/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{margin:wp((2/411.4*100).toString() + '%') ,width: wp((newWidth/411.4*100).toString() + '%') , height: hp((newHeight/683.4*100).toString() + '%'), borderRadius: wp((5/411.4*100).toString() + '%'), flex:1, resizeMode:'stretch', opacity:0.5, resizeMode:'contain'}}/>
    )
}

export const LocalImageCategoryIcon = ({source, originalWidth, originalHeight}) => {
    let widthChange =25 /originalWidth
    let heightChange = 20/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width:wp((newWidth/411.4*100).toString() + '%') , height:hp((newHeight/683.4*100).toString() + '%'), marginLeft:wp((10/411.4*100).toString() + '%'), }}/>
    )
}

export const LocalImageSubCategoryProduct = ({source, originalWidth, originalHeight}) => {
    let widthChange =60 /originalWidth
    let heightChange = 70/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width:wp((newWidth/411.4*100).toString() + '%') , height:hp((newHeight/683.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}

export const LocalImageSubCategoryProduct_1 = ({source, originalWidth, originalHeight}) => {
    let widthChange = 40/originalWidth
    let heightChange =50 /originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width: wp((newWidth/411.4*100).toString() + '%'), height:hp((newHeight/683.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}

export const LocalImageProduct = ({source, originalWidth, originalHeight}) => {
    let widthChange = wp('90%')/originalWidth
    let heightChange = hp('35%')/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{width:  wp((newWidth/411.4*100).toString() + '%'), height:hp((newHeight/683.4*100).toString() + '%'), marginTop:hp('1%'), resizeMode:'contain'}}/>
    )
}

export const LocalImageFilter = ({source, originalWidth, originalHeight}) => {
    let widthChange = 49/originalWidth
    let heightChange =40/originalHeight
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * heightChange

    return (
        <Image source={source} style={{backgroundColor:'white', width: wp((newWidth/411.4*100).toString() + '%'), height: hp((newHeight/683.4*100).toString() + '%'), borderWidth:wp((3/411.4*100).toString() + '%'), borderColor:'#02304B', borderRadius:wp((25/411.4*100).toString() + '%'), margin:wp((2/411.4*100).toString() + '%'), marginHorizontal:wp((4/411.4*100).toString() + '%'), resizeMode:'contain'}}/>
    )
}
// export default LocalImage