import React, { useState } from 'react'
import { Text, Image, View, StatusBar, Picker, FlatList, Dimensions, TouchableHighlight } from 'react-native'
import { Header, Button, Card, Icon } from 'react-native-elements'

function HomeScreen() {
    // const {width, height} = Dimensions.get("window")
    const [selectedVal, setSelectedVal] = useState('React')
    const [news, setNews] = useState([
        
        { key: '1', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '2', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '3', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '4', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '5', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '6', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '7', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '8', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '9', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
        { key: '10', author: "Taufiq", tittle: "Lorem Dolor", desc: "lorem ipsum dolor sit sit amet consectetur  amet consectetur adipiscing elit", img: { uri: 'https://reactnative.dev/img/tiny_logo.png' } }
        // { key: '3', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        // { key: '4', author: "Prastono", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        // { key: '5', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        // { key: '6', author: "Prastono", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        // { key: '9', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        // { key: '10', author: "Pow", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        // { key: '7', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        // { key: '8', author: "Tiwo", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },

    ])
    return (
        <View >
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={<Image
                    source={{ uri: 'https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png' }}
                    style={{ width: 100, height: 25, marginBottom: 10 }}
                />}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={
                    <View style={{ flexDirection: "row", borderRadius: 0.5, backgroundColor: '#ddf' }}>
                        <Icon
                            type="font-awesome"
                            name='filter' />
                        <Text>
                            Filtered By
                        </Text>
                    </View>
                }
                containerStyle={{
                    height: 65,
                    marginBottom: 10,
                    backgroundColor: '#fff',
                }}
            />
            <View style={{ backgroundColor: '#ddd', borderRadius: 10 }}>
                <Picker
                itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                
                    selectedValue={selectedVal}
                    onValueChange={(val) => { setSelectedVal(val) }}
                >
                    <Picker.Item label="Most See" value="1"></Picker.Item>
                    <Picker.Item label="Most Buy" value="2"></Picker.Item>
                </Picker>
            </View>
            <View style={{ marginBottom: 250 }}>
                <FlatList
                    // keyExtractor={(item)=>item.key}
                    data={news}
                    renderItem={({ item }) => (
                        <Card>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: "space-between"
                            }}>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        height: 90,
                                        width: '100%',

                                    }}
                                    source={item.img}
                                />
                            </View>
                            <Text>{item.author} </Text>
                            <Text>{item.desc} </Text>
                            
                            {/* //Button bawah kanan */}
                            <View style={{
                                marginTop:10,
                                height: 30,
                                // backgroundColor: '#ddd',
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                <View style={{flex:1, marginLeft:0,flexDirection:'row'}} >
                                    <Image
                                        style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                                        source={{
                                            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                                        }}
                                    />
                                </View>
                                <TouchableHighlight style={{ flex:1, width: 70, justifyContent: 'center', borderColor: '#000', borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, marginRight: 20, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            color='tomato'
                                            type='font-awesome'
                                            style={{ marginRight: 10 }}
                                            name='comment' />
                                        <Text style={{ marginLeft: 10, color: 'black' }}>500</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ flex:1, width: 70, justifyContent: 'center', borderColor: '#000', borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            color='tomato'
                                            type='font-awesome'
                                            style={{ marginRight: 10 }}
                                            name='thumbs-up' />
                                        <Text style={{ marginLeft: 10, color: 'black' }}>500</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </Card>
                    )}
                />
            </View>
        </View>
    )
}
export default HomeScreen