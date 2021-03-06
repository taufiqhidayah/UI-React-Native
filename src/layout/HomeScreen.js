import React, { Component } from 'react';
import { Text, Image, View, StatusBar, Picker, FlatList, Dimensions, TouchableHighlight } from 'react-native'
import { Header, Button, Card, Icon } from 'react-native-elements'
import axios from 'axios';

type Props = {};
export default class Category extends Component<Props> {

  constructor(props) {
    super(props)
    prefik_url = 'https://api.kawalcorona.com/indonesia/';
    this.state = {
      cases: []
    };
  }
  componentDidMount() {
    axios.get('https://api.kawalcorona.com/indonesia/')
      .then(res => {
        const cases = res.data;
        console.log(cases);
        this.setState({ cases });
      })
  }

  //   keyExtractor = (item, index) => index.toString()
  //   renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.cases}
  //     leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
  //   />
  // )
  list = () => {
    return this.state.cases.map((element, i) => {
      return (
        <View key={i} style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Card backgroundColor="#fcba03" style={{ backgroundColor: '#fcba03' }}>
              <Text>Kasus : {element.positif} </Text>
            </Card>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Text>Meninggal :{element.meninggal} </Text>
            </Card>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Text>Sembuh : {element.sembuh} </Text>
            </Card>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <View  >
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={<Image
            source={{ uri: 'https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png' }}
            style={{ width: 100, height: 25, marginBottom: 10 }}
          />}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={
            <TouchableHighlight underlayColor="white">
              <View style={{ height: 30, borderWidth: 0.2, borderRadius: 10, width: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>

                <Icon
                  name='filter'
                  type='font-awesome'
                  color='#f50'
                  style={{ fontSize: 2 }}
                />
                <Text style={{ marginLeft: 10, fontSize: 12 }}>FILTER BY</Text>
              </View>
            </TouchableHighlight>

          }
          containerStyle={{
            height: 65,
            marginBottom: 10,
            backgroundColor: '#fff',
          }}
        />
        <View>
          {this.list()}
        </View>

      </View>
    );
  }
}