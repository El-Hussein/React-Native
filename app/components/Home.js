import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon, } from 'react-native-elements';
import Dimensions from 'Dimensions';

import ListItem from './ListItem';
import { addPlace } from '../actions/plac';
import { sendMessage } from '../actions/auth';


class Home extends Component{

	state = {
		placeName: '',
		places: []
	}

	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.message){
	// 		alert(nextProps.message);
	// 	}
	// }

	placeSubmitHandler = () => {
			if(this.state.placeName.trim() === '') {
				return;
			}
			this.props.add(this.state.placeName);
			this.props.send('hi');
	}

	placeNameChangeHandler = (value) => {
		this.setState({
			placeName: value
		});    
	}

	placesOutput = () => {
		return (
			<FlatList style = { styles.listContainer }
			data = { this.props.places }
			keyExtractor={(item, index) => index.toString()}
			renderItem = { info => (
				<ListItem 
					placeName={ info.item.value }
				/>
			)}
		/>
		)
	}

	render(){
		return (
			<View style={{flex:1}}>
					<View style={styles.header}>
							<View style={styles.subHeader}>
									<Icon name="menu" size={35} color='white' type='feather' onPress={()=>this.props.navigation.toggleDrawer()}/>
									<Text style={{marginLeft: 10, fontSize: 30, color:'white'}} > Computer Shop </Text>
									<View style={{alignItems: "flex-end", marginLeft: "auto"}}>
											<Icon name="home" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
									</View>
									<View style={{alignItems: "flex-end", marginLeft: "auto"}}>
											<Icon name="shopping-cart" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
									</View>
							</View>
							<View style={{padding:10 , flexDirection: "row", flex:1, justifyContent:'space-between', alignItems:'center'}} >
									<TextInput style={{height:50, width:DEVICE_WIDTH - 60 , color:'white'}}
									placeholder='Search'
									placeholderTextColor='white'
									onFocus={()=>this.props.navigation.navigate('Search')}/>
									<Icon name='search' color='white' size={20} />
							</View>
					</View>
					<View style={ styles.container }>
						<View style = { styles.inputContainer }>
							<TextInput
								placeholder = "Seach Places"
								style = { styles.placeInput }
								value = { this.state.placeName }
								onChangeText = { this.placeNameChangeHandler }
							></TextInput>
							<Button title = 'Add' 
								style = { styles.placeButton }
								onPress = { this.placeSubmitHandler }
							/>
						</View>
						<View style = { styles.listContainer }>
							{ this.placesOutput() }
						</View>
					</View>
						
			</View> 
			
		)
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex:12,
		paddingTop: 30,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	},
	placeInput: {
		width: '70%'
	},
	placeButton: {
		width: '30%'
	},
	listContainer: {
		width: '100%'
	},
	header:{
        flex:2,
        padding:10,
        // backgroundColor: '#62AEFF'
        backgroundColor: '#CC542F'
    },
    subHeader:{
        flex:1,
        flexDirection: "row", 
        padding: 5,
        alignItems: "center",        
    },
    input:{
        flex:1,
        height:40,
        fontSize:20,
    }
});

const mapStateToProps = state => {
	return {
	places: state.places.places,
	message: state.auth.message
	}
}

const mapDispatchToProps = dispatch => {
	return {
	add: (name) => {
		dispatch(addPlace(name))
	},
	send: (message)=>{
		dispatch(sendMessage(message))
	}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);