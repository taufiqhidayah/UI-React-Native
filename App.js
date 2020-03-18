import * as React from 'react';
import { Button } from 'react-native-elements';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
// Page
import HomeScreen from './src/layout/HomeScreen'
import ProfileScreen from './src/layout/ProfileScreen'
import NewsScreen from './src/layout/NewsScreen'


// type Props = {};
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'News') {
          iconName = focused ? 'settings' : 'settings';
        } else if  (route.name === 'Profile'){
          iconName = focused? 'person' : 'person';
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={ size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
