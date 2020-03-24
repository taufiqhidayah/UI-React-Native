import React, { useState } from 'react'
import { Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native'
import { Card, Icon, Divider } from 'react-native-elements'
import { Header } from 'react-native-elements'

function MentorScreen({ navigation }){

    const [people, setPeope] = useState([
        { id: '1', name: 'Toni', img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
        { id: '2', name: 'Tani', img: { uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
        { id: '3', name: 'Tini', img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
        { id: '4', name: 'Tuti', img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
        { id: '5', name: 'Teni', img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
        { id: '6', name: 'Tana', img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, work: 'Disney Creator', raised: '$578', follow: '65K', update: '5' },
    ])
    const _onPressButton = () => {
        alert('You tapped the button!')
    }
  
    
    return (
        <View>
            <FlatList
                data={people}
                renderItem={({ item }) => (

                    // <TouchableWithoutFeedback onPress= {()=>{ console.log('halo')}} >
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details',{
                        itemId: item.name, imgId : item.img
                    })}>
                        <Card style={{ borderWidth: 1, borderRadius: 200 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        borderRadius: 50 / 2,
                                        width: '100%',

                                    }}
                                    source={item.img}
                                />
                                <View style={{ flex: 3, marginLeft: 20 }}>
                                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    <Text style={{}}>{item.name}</Text>
                                </View>
                                <TouchableHighlight onPress={_onPressButton} underlayColor="white">
                                    <View style={{ height: 40, borderWidth: 0.2, borderRadius: 10, width: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                        <Icon
                                            name='rss'
                                            type='font-awesome'
                                            color='#f50'
                                            style={{ fontSize: 2 }}
                                            onPress={() => console.log('hello')} />
                                        <Text style={{ marginLeft: 10, fontSize: 12 }}>FOLLOW</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <Divider style={{ marginTop: 15, backgroundColor: '#6e7278' }} />

                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: "center", alignItems: 'center' }}>
                                    <Text style={{ flex: 1, textAlign: 'center' }}>{item.raised}</Text>
                                    <Text style={{ flex: 1, textAlign: 'center' }}>{item.raised}</Text>
                                    <Text style={{ flex: 1, textAlign: 'center' }}>{item.raised}</Text>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: "center", alignItems: 'center' }}>
                                <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Raised</Text>
                                <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Fllowers</Text>
                                <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Update</Text>
                            </View>
                        </Card>

                    </TouchableWithoutFeedback  >
                )}
            />
        </View>
    )

}

export default MentorScreen