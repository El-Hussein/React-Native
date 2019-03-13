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
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

import header_bg from '../components/images/header_bg.jpg'
import logo from '../components/images/CompuMe.png';
import search from '../components/images/search.png';
import contact_num from '../components/images/contact_num.png';
import {LocalImage, LocalImageBig, SponserImage} from '../components/LocalImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import cat1_image from '../components/images/cat_1.png';
import cat2_image from '../components/images/cat_2.png';
import cat3_image from '../components/images/cat_3.png';

import sponser1 from '../components/images/sponser1.png';
import sponser2 from '../components/images/sponser2.png';
import sponser3 from '../components/images/sponser3.png';
import sponser4 from '../components/images/sponser4.png';
import sponser5 from '../components/images/sponser5.png';


import t from 'tcomb-form-native';

var _ = require('lodash');



var Form = t.form.Form;
// here we are: define your domain model
var Person = t.struct({
    FirstName: t.String, 
    LastName: t.String,  
    Address: t.String,   
    AdditionalInfo: t.String,  
    Country:t.enums({
        'default': 'select country',
        'IT': 'Italy',
        'US': 'United States'
    }, 'Country'),
});

class AddAddress extends Component{

    constructor(props) {
        super()
        this.state = {
            imagesSlider: [
                require('../components/images/2.jpg'),
                require('../components/images/1.jpg'),
                require('../components/images/3.jpg'),
            ],
            categories: [
                {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
                {image:{src: cat2_image, width:2480, height:3508}, name:"comunications"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
                {image:{src: cat1_image, width:2480, height:3508}, name:"computer"},
                {image:{src: cat3_image, width:200, height:200}, name:"electronics"},
            ],
            products: [
                {code:0, image:{src: cat1_image, width:2480, height:3508}, times:1, name:"sumsang galaxy note5 phone Blue", price:4898},
                {code:1, image:{src: cat1_image, width:2480, height:3508}, times:1, name:"computer", price:2299},
                {code:2, image:{src: cat2_image, width:2480, height:3508}, times:1, name:"comunications", price:5999},
            ],
            total:13196,
            AgeLabel:" ",
            AgeValue:'',
            AgeColor:'#646464',
            
            FirstNameLabel:" ",
            FirstNameValue:'',
            FirstNameColor:'#646464',
            
            LastNameLabel:" ",
            LastNameValue:'',
            LastNameColor:'#646464',

            AddInfoLabel:" ",
            AddInfoValue:'',
            AddInfoColor:'#646464',

            CountryLabel:" ",
            CountryValue:'',
            CountryColor:'#646464',

            value: {Country:'default'}
            
        }
        this._onPress = this._onPress.bind(this)
    }

    _onChange(value) {
        this.setState({ value });
    }

    _onPress() {
        // call getValue() to get the values of the form
        var value = this._form.getValue();
        if (value) { // if validation fails, value will be null
           console.log(value); // value here is an instance of Person
        }
    }
  
    render () {
        // clone the default stylesheet
        var stylesheetFirstName = _.cloneDeep(t.form.Form.stylesheet);
        stylesheetFirstName.controlLabel.normal.color = this.state.FirstNameColor;
        stylesheetFirstName.textbox.normal.color = this.state.FirstNameColor;
        stylesheetFirstName.textbox.normal.borderColor = this.state.FirstNameColor;

        var stylesheetLastName = _.cloneDeep(t.form.Form.stylesheet);
        stylesheetLastName.controlLabel.normal.color = this.state.LastNameColor;
        stylesheetLastName.textbox.normal.color = this.state.LastNameColor;
        stylesheetLastName.textbox.normal.borderColor = this.state.LastNameColor;

        var stylesheetAge = _.cloneDeep(t.form.Form.stylesheet);
        stylesheetAge.controlLabel.normal.color = this.state.AgeColor;
        stylesheetAge.textbox.normal.color = this.state.AgeColor;
        stylesheetAge.textbox.normal.borderColor = this.state.AgeColor;

        var stylesheetAddInfo = _.cloneDeep(t.form.Form.stylesheet);
        stylesheetAddInfo.controlLabel.normal.color = this.state.AddInfoColor;
        stylesheetAddInfo.textbox.normal.color = this.state.AddInfoColor;
        stylesheetAddInfo.textbox.normal.borderColor = this.state.AddInfoColor;

        var stylesheetCountry = _.cloneDeep(t.form.Form.stylesheet);
        stylesheetCountry.controlLabel.normal.color = this.state.CountryColor;
        stylesheetCountry.pickerContainer.normal.borderColor = this.state.CountryColor;


        var options = {
            order: ['FirstName', 'LastName', 'Address', 'AdditionalInfo', 'Country'],
            fields:{
                'FirstName':{
                    label:this.state.FirstNameLabel,
                    placeholder:"FIRST NAME",
                    onFocus:()=>{
                        this.setState({
                            FirstNameLabel:'FIRST NAME',
                            FirstNameColor: "#08517E"
                        })
                    },
                    onBlur:()=>{
                        if(this.state.FirstNameValue == ''){
                            this.setState({
                                FirstNameLabel:' ',
                            })
                        }
                        this.setState({
                            FirstNameColor: "#646464",
                        })
                    },
                    onChange:(value)=>{
                        this.setState({
                            FirstNameValue:value
                        })
                    },
                    stylesheet:stylesheetFirstName,
                },
                'LastName':{
                    label:this.state.LastNameLabel,
                    placeholder:"LAST NAME",
                    onFocus:()=>{
                        this.setState({
                            LastNameLabel:'LAST NAME',
                            LastNameColor: "#08517E"
                        })
                    },
                    onBlur:()=>{
                        if(this.state.LastNameValue == ''){
                            this.setState({
                                LastNameLabel:' ',
                            })
                        }
                        this.setState({
                            LastNameColor: "#646464",
                        })
                    },
                    onChange:(value)=>{
                        this.setState({
                            LastNameValue:value
                        })
                    },
                    stylesheet:stylesheetLastName,
                    
                },
                'Address':{
                    label:this.state.AgeLabel,
                    placeholder:"st.name/building number/apartment number",
                    onFocus:()=>{
                        this.setState({
                            AgeLabel:'st.name/building number/apartment number',
                            AgeColor: "#08517E"
                        })
                    },
                    onBlur:()=>{
                        if(this.state.AgeValue == ''){
                            this.setState({
                                AgeLabel:' ',
                            })
                        }
                        this.setState({
                            AgeColor: "#646464",
                        })
                    },
                    onChange:(value)=>{
                        this.setState({
                            AgeValue:value
                        })
                    },
                    stylesheet:stylesheetAge,
                },
                'AdditionalInfo':{
                    label:this.state.AddInfoLabel,
                    placeholder:"Additional Info",
                    onFocus:()=>{
                        this.setState({
                            AddInfoLabel:'Additional Info',
                            AddInfoColor: "#08517E"
                        })
                    },
                    onBlur:()=>{
                        if(this.state.AgeValue == ''){
                            this.setState({
                                AddInfoLabel:' ',
                            })
                        }
                        this.setState({
                            AddInfoColor: "#646464",
                        })
                    },
                    onChange:(value)=>{
                        this.setState({
                            AddInfoValue:value
                        })
                    },
                    stylesheet:stylesheetAddInfo,
                },
                'Country':{
                    label:this.state.CountryLabel,
                    placeholder:"Country",
                    onFocus:()=>{
                        this.setState({
                            CountryLabel:'Country',
                            CountryColor: "#08517E"
                        })
                    },
                    onBlur:()=>{
                        if(this.state.CountryValue == ''){
                            this.setState({
                                CountryLabel:' ',
                            })
                        }
                        this.setState({
                            CountryColor: "#646464",
                        })
                    },
                    onChange:(value)=>{
                        this.setState({
                            CountryValue:value
                        })
                    },
                    stylesheet:stylesheetCountry,
                },
            }
        };
        return (
            <View style={{flex:1, padding:wp('2%')}}>
                <Form
                    ref={c => this._form = c}  
                    type={Person}
                    options={options}
                    value={this.state.value}
                    onChange={this._onChange.bind(this)}
                    />
                <TouchableOpacity style={styles.button} onPress={this._onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddAddress;

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})  