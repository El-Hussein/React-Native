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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import axios from 'axios';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import bgSrc from './images/wallpaper.png';
import Product from './Product';

import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImage, LocalImageBig, SponserImage, LocalImageCategoryIcon, LocalImageSubCategoryProduct} from '../components/LocalImage';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';



const {width} = Dimensions.get('window')

// original
// const Slider = props => ( <View style={styles.imageContainer}>
//         <Image style={styles.image} source={props.uri}/>
//     </View>
// )

const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'center', marginTop:10,}]}>
        <Image style={styles.image_slider} source={props.uri}/>
    </View>
)

class Category extends React.Component{ 
    static navigationOptions= ({navigation}) =>({
        drawerLockMode: 'locked-closed',
        title: 'Category',
        headerRight:<TouchableOpacity onPress={() => navigation.goBack()}
        style={{backgroundColor:'orange', margin:10,padding:10}}>
        <Text style={{color:'#fff'}}>Back</Text></TouchableOpacity>		
    });

    constructor(props){
        super(props)
        // alert("Category navigations object: " + JSON.stringify(props.navigation.state));
        this.state = {
            isLoading: true, 
            dataSource:{}, 
            imagesSlider: [
                require('./images/cat_1.png'),
                require('./images/cat_2.png'),
                require('./images/cat_3.png'),
            ] ,
            subCategories:[
                {
                    products: [
                        {image:{src: cat1_image, width:2480, height:3508}, name:"sumsang galaxy note5 phone Blue", price:"4,898"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"Huawei Mate 10 Lite Mobile Phone Blue", price:"4,098"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"6,999"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"26,998"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"26,998"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"2,299"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"4,899"},
                    ],
                },
                {
                    products: [
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"26,998"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"Huawei Mate 10 Lite Mobile Phone Blue", price:"4,098"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"6,999"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"sumsang galaxy note5 phone Blue", price:"4,898"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"2,299"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"4,899"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"26,998"},
                    ],
                },
                {
                    products: [
                        {image:{src: cat1_image, width:2480, height:3508}, name:"sumsang galaxy note5 phone Blue", price:"4,898"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"26,998"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"6,999"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"2,299"},
                        {image:{src: cat3_image, width:200, height:200}, name:"electronics", price:"4,899"},
                        {image:{src: cat1_image, width:2480, height:3508}, name:"computer", price:"26,998"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"Huawei Mate 10 Lite Mobile Phone Blue", price:"4,098"},
                        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications", price:"5,999"},
                    ],
                }
            ]
        }
    }
    
    async componentDidMount(){
        // this for header of body data is application/x-www-form-urlencoded
        var qs = require('qs');
        var result;
        // alert(this.props.navigation.getParam('category_id', 60));
        return await axios.post('https://computershopegypt.com/android/product/category', qs.stringify({'category_id':this.props.navigation.getParam('category_id', 60)})) // this.props.navigation.getParam('category_id', 84)
        .then( (response) => {
            result = response.data;
            // alert(this.props.navigation.getParam('category_id', '84') + " : " + JSON.stringify(result));
            this.setState({
                isLoading: false,
                dataSource: result,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        
            var Data = this.state.subCategories.map( subCategory => 
               (<View style={styles.selected_products}>
                <View style={{backgroundColor:'white', paddingHorizontal:1, height:20, justifyContent:'center'}}>
                 <Text style={{
                 color: 'white',
                 backgroundColor:'#04517F',
                 borderRadius:3,
                 fontWeight:'bold',
                 fontSize:12,
                 justifyContent:'center',
                 alignItems:'center',
                 width:'20%',
                 position:'absolute',
                 right:-2,
                 paddingHorizontal:10
                 }}> More </Text>
                 </View>
                 <FlatList 
                 data={subCategory.products}
                 // showsHorizontalScrollIndicator={true}
                 horizontal={true}
                 renderItem={({item}) =>
                     
                     <View style={styles.product}>
                         <View style={{flexDirection:"row", padding:1, justifyContent:'center'}}>
                             <LocalImageSubCategoryProduct source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                             <Icon style={{position:'absolute', top:2, right:-9}} name="heart" size={15} color="red"/>
                             <Icon style={{position:'absolute', top:2, left:-9}} name="compress" size={15} color="black"/>
                         </View>
                         <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center', flex:1.5 }}>
                            <ScrollView>
                                <Text style={[styles.product_name, {fontSize:10}]}>{item.name}</Text>
                            </ScrollView>
                             <View style={{flexDirection:'row'}}>
                             </View>
                         </View>
                         <TouchableOpacity style={styles.addToCart}>
                             <Text style={[styles.product_price, {color:'#F0F0F0'}]}>{item.price}</Text>
                             <Text style={{color:'red', marginTop:12, fontWeight:"bold", fontSize:10}}>EGP</Text>
                         </TouchableOpacity>
                     </View>
                 }
                 // numColumns={2}
                 keyExtractor={item => toString(item.name)}
                 style={{ backgroundColor:'#033F63' }}
                 />
             </View>)
            );
         
        
        const { navigate } = this.props.navigation;
        if(!this.state.isLoading || this.state.isLoading ){
            return(
                <View style={{flex:1}}>
                    {/* Header */}
                    <View style={styles.header}>
                        <ImageBackground source={header_bg} style={styles.header_image_bg}>
                        <Icon name="bars" size={25} color="white" onPress={()=>alert('drawer Open')}/>
                        <Image source={logo} style={styles.logo}/>
                        <View style={{paddingLeft:5}}>
                            <TouchableOpacity>
                            <View style={{flexDirection:'row', alignContent:'space-between'}}>
                                <Icon name="shopping-cart" size={20} color="white"/>
                                <Text style={{color:'white', padding:2, fontWeight:'bold'}}>My Cart</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={{flexDirection:'row', alignContent:'space-between'}}>
                                <Icon name="compress" size={20} color="white"/>
                                <Text style={{color:'white', padding:2, fontWeight:'bold'}}>Compare</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:20, flexShrink:10}}>
                            <TouchableOpacity style={{flex:2, justifyContent:'flex-start', alignItems:'center'}}>
                            <Image source={search} style={{marginBottom:10, marginRight:20 ,width:60, height:55}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Image source={contact_num} style={{marginBottom:10, marginRight:20 ,width:50, height:30}}/>
                            </TouchableOpacity>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex:4}}>
                        
                        <Swiper 
                            // showsPagination={false}
                            // autoplay={true}
                            dotStyle={{width:50, height:1, color:'white'}}
                            dotColor="white"
                            activeDotStyle={{width:50, height:1, color:'white'}}
                            activeDotColor="#6D6D6F"
                            paginationStyle={{position:'absolute', bottom:2,right:160}}
                            > 
                            {
                                this.state.imagesSlider.map((item, i) => <Slider 
                                    uri={item}
                                    key={i}
                                />)
                            }
                        </Swiper>
                        <View style={{
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
                                minWidth:100,
                            }}>
                                <Text style={{color:'white', fontWeight:'800'}}>
                                    Communications
                                </Text>
                                <LocalImageCategoryIcon source={cat2_image} originalWidth={2400} originalHeight={3500} />
                        </View>

                    </View>

                    {/* body sub category */}
                    <View style={{flex:10, marginTop:3}}>
                        <ScrollView>
                            {Data}
                        </ScrollView>
                    </View>
                </View>
            )
        }
        else if(this.state.isLoading){
            return(
                <View style={styles.loaderContainer}>
                <Text>
                    this is Category Page.
                </Text>
                <ActivityIndicator/>
                </View>
            )
        }
        else{
        return (
        <View>
            <ScrollView style={[{backgroundColor:'#CC542F'}, {backgroundColor:'white'}]}>
                <Header 
                    placement="left"
                    leftComponent={{ icon:'arrow-back', onPress:()=>this.props.navigation.navigate('Home'), color: '#fff' }}
                    centerComponent={{ text: 'Category', style: { color: '#fff' } }}
                    // backgroundColor='#62AEFF'
                    backgroundColor='#CC542F'
                />  
                <View style={{height:300}}>
                    <Swiper height={300}> 
                    {
                        this.state.imagesSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }
                    </Swiper>
                </View>
                <FlatList 
                data={this.state.dataSource}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) =>
                    <View style={{justifyContent:'space-around', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{

                            if(item.products.length == 0)
                            {
                                alert('there no products for this sub cat!');
                            }else{
                                // alert(JSON.stringify(item.products));
                                navigate('Product', {products:item.products});
                                // console.warn('should navigate to new page.');
                            }

                        }}>
                            {/* <ImageBackground style={styles.element} source={{uri: item.image}}>
                                <Text style={styles.name}>{item.name}</Text>
                            </ImageBackground> */}
                            <View style={{padding:5, borderWidth: 1, borderColor:'red', borderRadius:5, margin:3}}>
                                <Image source={{uri: item.image}} style={{height:300 , marginHorizontal:10,width:DEVICE_WIDTH/2 - 40, }}/>
                                <View style={{borderBottomColor:'#eee', borderBottomWidth:1, marginHorizontal:10 ,width:DEVICE_WIDTH/2 - 80}}></View>
                                <Text style={{fontWeight:'bold', fontSize:20, margin:5, color:'orange'}}> {item.name} </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={item => toString(item.age)}
                numColumns={2}
                style={{flex:1,}}
                /> 
            </ScrollView>
        </View>
        );
        }
    }
}

const CatNav = createStackNavigator({
    Category: {
        screen: Category,
        navigationOption:{
            title:"Category", 
        }
    },
    Product: {
        screen: Product,
        navigationOption:{
            title:"Product", 
        }
    }
},
{
    navigationOptions:{
        header: null,
    }
})

export default CatNav;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header:{
        flex: 1.8,
        flexDirection:'row',
      },
      categories:{
        flex: 2,
        // backgroundColor:'blue',
      },
      slider:{
        flex: 3,
        backgroundColor:'grey',
        marginBottom:2,
        marginTop:1,
      },
      selected_products:{
        // flex: 15,
        // backgroundColor:'blue'
        // backgroundColor:'green',
      },
      footer:{
        flex: 2.6,
        // backgroundColor:'brown',
      },
    
    
      header_image_bg:{
        flex: 1,
        resizeMode:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingLeft:4
      },
      logo :{
        width:'58%',
        height:'80%',
    
      },
    
      image_slider:{
        width: DEVICE_WIDTH-2,
      },
    
      category:{
        margin:1,
        // padding:1,
        justifyContent:'center',
        alignItems:'center',
      },
      category_image: {
        width:35,
        height:35,
        marginVertical:2,
      },
      category_name:{
        fontWeight:"bold",
        fontSize:12,
        color: "white",
      },
    
      product:{
        width: DEVICE_WIDTH/4,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:0,
        marginVertical:3,
        marginHorizontal:DEVICE_WIDTH/25,
        backgroundColor:"#FFFFFF",
        height:125
      },
      product_name:{
        textAlign: 'center',
        color:"#03507E",
        fontWeight:"600",
        fontSize:12,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
      },
      product_price:{
        color:"#03507E",
        fontWeight:"bold",
        fontSize:18,
      },
    
      addToCart:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#033F63",
        borderRadius:3,
        // borderWidth:1,
        borderColor:"#103D5C",
        width: DEVICE_WIDTH/4 - 4,
        marginVertical:1,
      },

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
        width: DEVICE_WIDTH / 2 - 20,
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
