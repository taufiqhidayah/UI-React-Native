import React, { useState } from 'react'
import { Text, View, StatusBar, Picker, FlatList } from 'react-native'
import { Header, Image, Button, Card } from 'react-native-elements'
import { Icon } from 'react-native-elements'

function HomeScreen() {
    const [selectedVal, setSelectedVal] = useState('React')
    const [news, setNews] = useState([
        { key: '1', author: "Tono", tittle: "Lorem Ipsum ", desc: "lorem sit amet consectetur  ipsum dolor sit amet consectetur adipiscing elit" },
        { key: '2', author: "Taufiq", tittle: "Lorem Dolor", desc: "lorem ipsum dolor sit sit amet consectetur  amet consectetur adipiscing elit" },
        { key: '3', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        { key: '4', author: "Prastono", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        { key: '5', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        { key: '6', author: "Prastono", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        { key: '9', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        { key: '10', author: "Pow", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },
        { key: '7', author: "Prasstiwi", tittle: "Lorem Set", desc: "lorem ipsum dolor sit amet  sit amet consectetur  consectetur adipiscing elit" },
        { key: '8', author: "Tiwo", tittle: "Lorem Uno", desc: "lorem ipsum dolor sit amet consectetur  sit amet consectetur  adipiscing elit" },

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
                selectedValue ={selectedVal}
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
                            <Text>{item.author} </Text>
                            <Text>{item.desc} </Text>
                        </Card>
                    )}
                />
            </View>
        </View>
    )
}
export default HomeScreen