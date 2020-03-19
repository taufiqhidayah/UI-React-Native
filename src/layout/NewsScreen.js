import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';

// type Props = {};
export default class NewsScreen extends Component {

  constructor() {
    super()
    prefik_url = 'http://newsapi.org/v2/sources?apiKey=266d190c4442467880148c3565390825/';
    this.state = {
        categories: []
    };
  }
  componentDidMount() {
    axios.get(`http://mhs.rey1024.com/apibudaya/getListCategory.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      .catch(err=>{

      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.nama}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
  />
)
  render() {
    return (
        <View style={styles.container} >
          {/* <View style={styles.header}>
            <Text style={styles.txtHeader}> Kategori Budaya </Text>
          </View> */}
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});