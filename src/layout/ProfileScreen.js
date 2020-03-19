import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Avatar, Text,Badge, Icon, withBadge, Button } from 'react-native-elements'

function ProfileScreen() {
    return (
        <View>
        <View style={styles.header}>
            <Image
            style={styles.image}
             source={{
                uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            />
            {/* <Avatar 
                style={styles.image}
                rounded
               
                size="xlarge"
            /> */}
            <Text style={{fontSize:20,marginTop:10}}>Jake W Harton</Text>
            <Text style={{fontSize:13,opacity:70}}>Founder.Xlogics.com</Text>

            
        </View>
        <View style={{flexDirection:'row'}}>
        <Button
  icon={
    <Icon
      name="home"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>
<Button
  icon={
    <Icon
      name="home"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>
        </View>
        </View>
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

export default ProfileScreen