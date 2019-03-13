import React, {Component} from 'react'
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
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import Localization from '../localization/localization';

import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import user from '../components/images/key.png';
import log from '../components/images/log.png';
import lock from '../components/images/lock.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImageProduct, LocalImageBrand, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct_1} from '../components/LocalImage';
// import Grading from 'react-native-grading';
import { LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import reviewBG from '../components/images/review.jpg';
import backGround from '../components/images/order_bg.jpg';
import cat1_image from '../components/images/mob2.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';
import mob1 from '../components/images/mob1.png';
import mob2 from '../components/images/mob2.png';
import mob3 from '../components/images/mob3.png';
import car from '../components/images/car.png';
import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';

class OrderHistory extends Component{

    constructor(props) {
        super();
        this.state = {
            orederHistoryData:[
                {id:1, shipStatus:2, totalPrice:'10.256', status:'0', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
                {id:2, shipStatus:1, totalPrice:'10.256', status:'1', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
                {id:3, shipStatus:2, totalPrice:'10.256', status:'2', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
                {id:4, shipStatus:3, totalPrice:'10.256', status:'2', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
                {id:4, shipStatus:0, totalPrice:'10.256', status:'2', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
                {id:4, shipStatus:3, totalPrice:'10.256', status:'2', date:'2017/8/10 03:50 pm', delivery:'date', name:'samsung sm-g611f mobile phone galaxy j7'},
            ]
        }
    }

    componentDidMount() {
        lor(this);
    }
      
    componentWillUnMount() {
        rol();
    }

    render () {
        
         return (
            <ImageBackground source={backGround} style={{flex:1}}>
                {/* Header */}
                <View style={{ height:hp('16%')}}>
                    <ImageBackground source={header_bg} style={{flex:1, resizeMethod:"contain"}} >
                        <View style={styles.header_image_bg}>
                            <Icon name="arrow-left" size={wp('6%')} color="white" onPress={()=>this.props.navigation.goBack()} style={{marginLeft:wp('1.8%')}}/>
                            <Image source={logo} style={{ marginTop:wp('1%'), width:wp('59%'), height:hp('9%'), resizeMode:'contain' }}/>
                            <View style={{paddingLeft:wp((5/411.4*100).toString() + '%')}}>
                                <TouchableOpacity>
                                <View style={{flexDirection:'row', alignContent:'space-between'}}>
                                    <Icon name="shopping-cart" size={hp('5%')} color="white"/>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View onPress={()=>this.props.navigation.navigate('Search')} style={{margin:wp('2%'), justifyContent:'space-between', alignItems:'center', backgroundColor:'#F2F2F2', height:hp('6%'), width:wp('96%'), borderRadius:wp('2%'), flexDirection:'row'}}>
                            <TextInput
                                style={{backgroundColor:'#D2D2D2', paddingLeft:wp('2%'), width:wp('86'), borderTopLeftRadius:wp('2%'), borderBottomLeftRadius:wp('2%') , height:hp('6%'), fontSize:wp('4.1%'), color:'white'}}
                                placeholder={Localization.searchProduct}
                                // secureTextEntry={this.props.secureTextEntry}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="Search Products"
                                // onSubmitEditing={}
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                                // onChangeText={this.props.passText}
                            />
                            <TouchableOpacity style={{marginRight:wp('2%')}}><Icon name='search' size={wp('7%')} color="black" /></TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{height:wp('8%'), justifyContent:'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'#0A5481', borderRadius:wp('1%'), padding:wp('1%'), position:'absolute', top:wp('1%'), left:wp('-1%')}}>
                        <Text style={{fontSize:wp('3%'), color:'white', fontWeight:'bold'}}>  {Localization.orderHistory} </Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.orederHistoryData}
                    showsVerticalScrollIndicator={false}
                    renderItem = {({item})=>{
                        Bar = ()=>{
                            hi = 0;
                            if(item.shipStatus == 0){
                                return(
                                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('3%'), width:wp('94%')}}>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#0C970A', position:'absolute', top:wp('2%'), right:wp('6.9%')}}/>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#0C970A', position:'absolute', top:wp('2%'), left:wp('6.9%')}}/>
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#0C970A', position:'absolute', top:wp('2%'), left:wp('6.9%')}}/>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                    </View>
                                )
                            } else if(item.shipStatus == 1){
                                return(
                                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('3%'), width:wp('94%')}}>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#D2D2D2', position:'absolute', top:wp('2%'), right:wp('6.9%')}}/>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#0C970A', position:'absolute', top:wp('2%'), left:wp('6.9%')}}/>
                                        <Icon color='#D2D2D2' name="check-circle" size={wp('4.5%')} />
                                    </View>
                                )  
                            } else if(item.shipStatus == 2){
                                return(
                                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('3%'), width:wp('94%')}}>
                                        <Icon color='#0C970A' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#D2D2D2', position:'absolute', top:wp('2%'), right:wp('6.9%')}}/>
                                        <Icon color='#D2D2D2' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#D2D2D2', position:'absolute', top:wp('2%'), left:wp('6.9%')}}/>
                                        <Icon color='#D2D2D2' name="check-circle" size={wp('4.5%')} />
                                    </View>
                                )
                            } else if(item.shipStatus == 3){
                                return(
                                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('3%'), width:wp('94%')}}>
                                        <View style={{backgroundColor:'#FD0000', justifyContent:'center', alignItems:'center', borderRadius:wp('2%'), width:wp('4%'), height:wp('4%')}}>
                                            <Icon color='white' name="close" size={wp('3%')} />
                                        </View>
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#D2D2D2', position:'absolute', top:wp('2%'), right:wp('6.9%')}}/>
                                        <Icon color='#D2D2D2' name="check-circle" size={wp('4.5%')} />
                                        <View style={{borderWidth:hp('0.1%'), width:wp('38%'), borderColor:'#D2D2D2', position:'absolute', top:wp('2%'), left:wp('6.9%')}}/>
                                        <Icon color='#D2D2D2' name="check-circle" size={wp('4.5%')} />
                                    </View>
                                )
                            }
                        }
                        return(
                        <View style={{borderWidth:wp('0.3%'), backgroundColor:'white', marginHorizontal:wp('2%'), marginVertical:wp('1%'), borderColor:'gray', height:hp('34%')}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('2%'), paddingVertical:wp('1%')}}>
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{color:'#0A5481', fontSize:wp('2.5%'), textAlign:'center'}}>{Localization.SHIPMENTNO}</Text>
                                    <Text style={{color:'#0A5481', fontSize:wp('2.5%'), textAlign:'center'}}>{item.id}</Text>
                                </View>
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{color:'#0A5481', fontSize:wp('2.5%'), textAlign:'center'}}>{Localization.ORDERDATE}</Text>
                                    <Text style={{color:'#0A5481', fontSize:wp('2.5%'), textAlign:'center'}}>{item.date}</Text>
                                </View>
                                <Text style={{color:'#0A5481', fontSize:wp('2.5%'), textAlign:'center'}}>{Localization.TRACKSHIPMENT}</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Bar/>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:wp('2%'), paddingVertical:wp('1%')}}>
                                <Text style={{color:'#0A5481', fontSize:wp('2%')}}>{Localization.inprocessing}</Text>
                                <Text style={{color:'#0A5481', fontSize:wp('2%')}}>{Localization.shipped}</Text>
                                <Text style={{color:'#0A5481', fontSize:wp('2%')}}>{Localization.delivered}</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:wp('10%'), height:hp('3%'), resizeMode:'contain'}} source={car}/>
                                <Text  style={{color:'#0A5481', fontSize:wp('3%')}}> {Localization.expectedDelivery} {item.delivery} </Text>
                            </View>

                            <View style={{flexDirection:'row', opacity:0.5, width:wp('93%'), color:'gray', marginHorizontal:wp('1%'), borderWidth:wp('0.1%')}}>

                            </View>
                            
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:wp('20%'), marginLeft:wp('1%'), marginTop:wp('1%'), height:hp('14%'), resizeMode:'contain'}} source={mob2}/>
                                <View style={{justifyContent:'space-evenly', marginLeft:wp('4%')}}>
                                    <Text style={{fontWeight:'bold', color:'#0A5481', fontSize:wp('3.5%')}}> {item.name} </Text>
                                    <Text style={{fontWeight:'bold', color:'#D2D2D2', fontSize:wp('2%')}}> {Localization.status} </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontWeight:'bold', color:'#0C960B', fontSize:wp('3.5%')}}> {item.status} </Text>
                                        <Icon name="check-circle" size={wp('4%')} color="#0C960B" />
                                    </View>
                                </View>
                            </View>

                            <View style={{flexDirection:'row', width:wp('93%'), margin:wp('1%'), opacity:0.5, position:'relative', height:hp('0.2%'),  backgroundColor:"gray"}}>

                            </View>

                            <View style={{flexDirection:'row', justifyContent:'flex-end', width:wp('94%'), color:'gray', marginHorizontal:wp('1%')}}>
                                <Text style={{color:'#0A5481', fontWeight:'bold', fontSize:wp('3%')}}> {Localization.viewOrderDetails} </Text>
                            </View>

                        </View>
                        )        
                    }
                    }
                    keyExtractor = {item => toString(item.id)}
                    style = {{height:hp('78')}}
                />
            </ImageBackground>
         )
    }
}

export default OrderHistory


const DW = Dimensions.get('window').width;
const DH = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header_image_bg:{
        flex: 1,
        resizeMode:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingLeft:4
    },
    header4:{ 
        position:'absolute', 
        top:0, 
        fontWeight:'900', 
        fontSize:16, 
        color:'#AC0703' 
    },
    catName:{
        backgroundColor:'#033F63', 
        position:'absolute', 
        top:0,
        left:-2,
        borderRadius:5,
        paddingVertical:2,
        paddingLeft:10,
        paddingRight:4,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        minWidth:DW/4,
    },
    product:{
        width: DW/4 - 10,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:0,
        marginVertical:3,
        marginHorizontal:5,
        backgroundColor:"#FFFFFF",
        
    },
    product_name:{
        textAlign: 'center',
        color:"#03507E",
        fontWeight:"500",
        fontSize:10,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        height:25
    },
    product_price:{
        color:"#03507E",
        fontWeight:"bold",
        fontSize:16,
    },
    addToCart:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#033F63",
        borderRadius:3,
        // borderWidth:1,
        borderColor:"#103D5C",
        width: DW/4 - 20,
        marginVertical:1,
    },
    image_slider:{
        width: DW-2,
    },
    
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },

});
