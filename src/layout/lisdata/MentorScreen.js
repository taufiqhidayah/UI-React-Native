import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native'
import { Card, Icon, Divider } from 'react-native-elements'
import { Header } from 'react-native-elements'
import axios from 'axios'

function MentorScreen({ navigation }) {

	const [newsku, setNews] = useState()

	const _onPressButton = () => {
		alert('You tapped the button!')
	}
	useEffect(() => {
		axios.get('http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=266d190c4442467880148c3565390825')
			.then(res => {
				const news = res.data
				console.log(news)
				setNews(newsku)
			})
	}, [])
	return (
		<View>
		  <FlatList 
         keyExtractor={item => item.id}
         data={newsku}
         renderItem={({ item }) => <View style={{height:20}}>
           <Text style={{color:'#000',fontWeight:'bold'}}>{item.totalResults} </Text>
         </View>} 
      />
		</View>
	)
}

export default MentorScreen