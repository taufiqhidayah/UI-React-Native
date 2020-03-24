import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { Avatar, Text, Badge, Icon, withBadge, Button, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

function DetailProfileScreen({ route, navigation })  {
    const { itemId } = route.params;
    const { imgId } = route.params;
    return (

        <ScrollView>
            <View>
                <Card>
                    <Text></Text>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={imgId}
                        />
                        {/* <Avatar 
                style={styles.image}
                rounded
               
                size="xlarge"
            /> */}
                        <Text style={{ fontSize: 20, marginTop: 10 }}>{itemId}</Text>
                        <Text style={{ fontSize: 13, opacity: 70 }}>Founder.Xlogics.com</Text>


                    </View>
                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableHighlight underlayColor="white">
                            <View style={{ height: 40, borderWidth: 0.2, borderRadius: 10, width: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <Icon
                                    name='rss'x
                                    type='font-awesome'
                                    color='#f50'
                                    style={{ fontSize: 2 }}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>FOLLOW</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="white">
                            <View style={{ height: 40, borderWidth: 0.2, borderRadius: 10, width: 150, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <Icon
                                    name='rss'
                                    type='font-awesome'
                                    color='#f50'
                                    style={{ fontSize: 2 }}
                                    onPress={() => console.log('hello')} />
                                <Text style={{ marginLeft: 10, fontSize: 12 }}>Send a Message</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: "center", alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', flex: 1, textAlign: 'center' }}>{}1</Text>
                            <Text style={{ fontWeight: 'bold', flex: 1, textAlign: 'center' }}>{}2</Text>
                            <Text style={{ fontWeight: 'bold', flex: 1, textAlign: 'center' }}>{}3</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: 15, marginBottom: 20, flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: "center", alignItems: 'center' }}>
                        <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Raised</Text>
                        <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Fllowers</Text>
                        <Text style={{ color: '#232426', flex: 1, textAlign: 'center' }}>Update</Text>
                    </View>
                </Card>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Card >
                        <Text>
                            About Me
                        </Text>
                        <Text style={{ marginTop: 10 }}>
                            Lorem Ipsum Dolor set amit
                        </Text>

                    </Card>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Card >
                        <Text>
                            CONNECT WITH ME
                        </Text>
                        <TouchableHighlight style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='link'
                                    type='font-awesome'
                                    color='tomato'
                                />
                                <Text style={{ flex: 1, marginLeft: 10 }}>www.github.com</Text>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='caret-right'
                                    type='font-awesome'
                                    color='#616662'
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='envelope'
                                    type='font-awesome'
                                    color='tomato'
                                />
                                <Text style={{ flex: 1, marginLeft: 10 }}>www.github.com</Text>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='caret-right'
                                    type='font-awesome'
                                    color='#616662'
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='logo-twitter'
                                    type='ionicon'
                                    color='tomato'
                                />
                                <Text style={{ flex: 1, marginLeft: 10 }}>www.github.com</Text>
                                <Icon
                                    style={{ flex: 1 }}
                                    name='caret-right'
                                    type='font-awesome'
                                    color='#616662'
                                />
                            </View>
                        </TouchableHighlight>
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100, height: 100, borderRadius: 200 / 2

    },
    header: {
        justifyContent: 'center',
        height: 200,
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ddd'
    }
})

export default DetailProfileScreen