import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImage, LocalImageBig, SponserImage} from '../components/LocalImage';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';

const Slider = props => ( <View style={[styles.imageContainer, {alignItems:'center', justifyContent:'center', marginTop:10,}]}>
        <Image style={styles.image_slider} source={props.uri}/>
    </View>
)

class Home extends Component{

  constructor(props) {
    super()
    this.state = {
      imagesSlider: [
        require('../components/images/1.jpg'),
        require('../components/images/2.jpg'),
        require('../components/images/3.jpg'),
      ],
      categories: [
        {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications"},
        {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
        {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications"},
        {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
        {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
        {image:{src: cat2_image, width:2480, height:3508}, name:"comunications"},
        {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
      ],
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
      ]
    }
  }
  
  render () {
    return (
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

          {/* Categories */}
          
          <View style={styles.categories}>
            <FlatList 
              data={this.state.categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>
                <View style={styles.category}>
                    {/* <TouchableOpacity style={{padding:0}}> */}
                      <LocalImage source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                    {/* </TouchableOpacity> */}
                    <View style={{backgroundColor:"#03507E", paddingHorizontal:2}}>
                      <Text style={styles.category_name}>{item.name}</Text>
                    </View>
                </View>
              }
              keyExtractor={item => toString(item.name)}
              style={{flex:1}}
            /> 
          </View>
          <View style={styles.slider}>
            <Swiper height={300}
            showsPagination={false}
            autoplay={true}> 
            {
                this.state.imagesSlider.map((item, i) => <Slider 
                    uri={item}
                    key={i}
                />)
            }
            </Swiper>
          </View>
          <ScrollView style={{height:"55%"}}>
          <View style={styles.selected_products}>
            <Text style={{
              color: 'white',
              backgroundColor:'#04517F',
              borderRadius:3,
              fontWeight:'bold',
              fontSize:11,
              justifyContent:'space-around',
              alignItems:'center',
              marginRight:"60%",
            }}> Best selling Mobiles </Text>
            <FlatList 
              data={this.state.products}
              // showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={({item}) =>
                <View>
                  
                  <View style={styles.product}>
                      <View style={{flexDirection:"row", padding:2, justifyContent:'space-around'}}>
                        <Icon style={{margin:5}} name="heart" size={20} color="red"/>
                        <LocalImageBig source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        <Icon style={{margin:5}} name="compress" size={20} color="black"/>
                      </View>
                      <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.product_name}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                          <Text style={styles.product_price}>{item.price}</Text>
                          <Text style={{color:'red', marginTop:13, fontWeight:"bold", fontSize:10}}>EGP</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addToCart}>
                        <Text style={{color:'white', fontSize:10}}> Add to Cart </Text><Icon name="shopping-cart" size={15} color="white"/>
                      </TouchableOpacity>
                  </View>
                </View>
              }
              // numColumns={2}
              keyExtractor={item => toString(item.name)}
              // style={{}}
            />
          </View>
          <View style={styles.selected_products}>
            <Text style={{
              color: 'white',
              backgroundColor:'#04517F',
              borderRadius:3,
              fontWeight:'bold',
              fontSize:11,
              justifyContent:'space-around',
              alignItems:'center',
              marginRight:"60%",
            }}> Best selling Computers </Text>
            <FlatList 
              data={this.state.products}
              // showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={({item}) =>
                <View>
                  
                  <View style={styles.product}>
                      <View style={{flexDirection:"row", padding:2, justifyContent:'space-around'}}>
                        <Icon style={{margin:5}} name="heart" size={20} color="red"/>
                        <LocalImageBig source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        <Icon style={{margin:5}} name="compress" size={20} color="black"/>
                      </View>
                      <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.product_name}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                          <Text style={styles.product_price}>{item.price}</Text>
                          <Text style={{color:'red', marginTop:13, fontWeight:"bold", fontSize:10}}>EGP</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addToCart}>
                        <Text style={{color:'white', fontSize:10}}> Add to Cart </Text><Icon name="shopping-cart" size={15} color="white"/>
                      </TouchableOpacity>
                  </View>
                </View>
              }
              // numColumns={2}
              keyExtractor={item => toString(item.name)}
              // style={{}}
            />
          </View>
          <View style={styles.selected_products}>
            <Text style={{
              color: 'white',
              backgroundColor:'#04517F',
              borderRadius:3,
              fontWeight:'bold',
              fontSize:11,
              justifyContent:'space-around',
              alignItems:'center',
              marginRight:"60%",
            }}> Best selling Electronics </Text>
            <FlatList 
              data={this.state.products}
              // showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={({item}) =>
                <View>
                  
                  <View style={styles.product}>
                      <View style={{flexDirection:"row", padding:2, justifyContent:'space-around'}}>
                        <Icon style={{margin:5}} name="heart" size={20} color="red"/>
                        <LocalImageBig source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        <Icon style={{margin:5}} name="compress" size={20} color="black"/>
                      </View>
                      <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.product_name}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                          <Text style={styles.product_price}>{item.price}</Text>
                          <Text style={{color:'red', marginTop:13, fontWeight:"bold", fontSize:10}}>EGP</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addToCart}>
                        <Text style={{color:'white', fontSize:10}}> Add to Cart </Text><Icon name="shopping-cart" size={15} color="white"/>
                      </TouchableOpacity>
                  </View>
                </View>
              }
              // numColumns={2}
              keyExtractor={item => toString(item.name)}
              // style={{}}
            />
          </View>
          <View style={styles.selected_products}>
            <Text style={{
              color: 'white',
              backgroundColor:'#04517F',
              borderRadius:3,
              fontWeight:'bold',
              fontSize:11,
              justifyContent:'space-around',
              alignItems:'center',
              marginRight:"60%",
            }}> Best selling Mobiles </Text>
            <FlatList 
              data={this.state.products}
              // showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={({item}) =>
                <View>
                  
                  <View style={styles.product}>
                      <View style={{flexDirection:"row", padding:2, justifyContent:'space-around'}}>
                        <Icon style={{margin:5}} name="heart" size={20} color="red"/>
                        <LocalImageBig source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        <Icon style={{margin:5}} name="compress" size={20} color="black"/>
                      </View>
                      <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.product_name}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                          <Text style={styles.product_price}>{item.price}</Text>
                          <Text style={{color:'red', marginTop:13, fontWeight:"bold", fontSize:10}}>EGP</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addToCart}>
                        <Text style={{color:'white', fontSize:10}}> Add to Cart </Text><Icon name="shopping-cart" size={15} color="white"/>
                      </TouchableOpacity>
                  </View>
                </View>
              }
              // numColumns={2}
              keyExtractor={item => toString(item.name)}
              // style={{}}
            />
          </View>
          <View style={styles.selected_products}>
            <Text style={{
              color: 'white',
              backgroundColor:'#04517F',
              borderRadius:3,
              fontWeight:'bold',
              fontSize:11,
              justifyContent:'space-around',
              alignItems:'center',
              marginRight:"60%",
            }}> Best selling Mobiles </Text>
            <FlatList 
              data={this.state.products}
              // showsHorizontalScrollIndicator={true}
              horizontal={true}
              renderItem={({item}) =>
                <View>
                  
                  <View style={styles.product}>
                      <View style={{flexDirection:"row", padding:2, justifyContent:'space-around'}}>
                        <Icon style={{margin:5}} name="heart" size={20} color="red"/>
                        <LocalImageBig source={item.image.src} originalWidth={item.image.width} originalHeight={item.image.height}/>
                        <Icon style={{margin:5}} name="compress" size={20} color="black"/>
                      </View>
                      <View style={{textAlign: 'center', paddingHorizontal:2, alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.product_name}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                          <Text style={styles.product_price}>{item.price}</Text>
                          <Text style={{color:'red', marginTop:13, fontWeight:"bold", fontSize:10}}>EGP</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addToCart}>
                        <Text style={{color:'white', fontSize:10}}> Add to Cart </Text><Icon name="shopping-cart" size={15} color="white"/>
                      </TouchableOpacity>
                  </View>
                </View>
              }
              // numColumns={2}
              keyExtractor={item => toString(item.name)}
              // style={{}}
            />
          </View>
          </ScrollView>
          <View style={styles.footer}>
              <View style={{flexDirection:'row'}}>
                <SponserImage source={sponser1} originalHeight={33} originalWidth={120}/>
                <SponserImage source={sponser2} originalHeight={33} originalWidth={120}/>
                <SponserImage source={sponser3} originalHeight={33} originalWidth={120}/>
                <SponserImage source={sponser4} originalHeight={33} originalWidth={120}/>
                <SponserImage source={sponser5} originalHeight={33} originalWidth={120}/>
              </View>
          </View>
      </View>
    )
  }
}

export default Home;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header:{
    flex: 2.6,
    flexDirection:'row',
  },
  categories:{
    flex: 2,
    // backgroundColor:'blue',
  },
  slider:{
    flex: 4,
    backgroundColor:'grey',
    marginBottom:2,
    marginTop:1,
  },
  selected_products:{
    flex: 15,
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
    width:'55%',
    height:'80%',

  },

  image_slider:{
    width: DEVICE_WIDTH - 5,
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
    width: DEVICE_WIDTH/2 - 4,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    padding:0,
    margin:2,
    // backgroundColor:"#eeeeee",
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
    backgroundColor:"#FE0000",
    borderRadius:5,
    borderWidth:1,
    borderColor:"#770101"
  },
})  