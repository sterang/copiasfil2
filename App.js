import React from 'react';
import Login from './app/screens/login/login';
import Tab1 from './app/screens/tabs/listmovie';
import Tab2 from './app/screens/tabs/favorite';
import Tab3 from './app/screens/tabs/profile';
//import {createSwitchNavigator} from '@react-navigation';
import { NavigationContainer,  } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const MaterialBottomTabs = createMaterialBottomTabNavigator();

App = () => {

  createHomeStack = () =>
    <Stack.Navigator    >
      <Stack.Screen
        name="Detail"
        component={Login}
        options={{
          title: "Detail Screen"
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
    </Stack.Navigator>

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab 1"
        style={{ marginBottom: 16 }}
        component={Tab1}
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: () => (
            <Ionicons name="md-home" size={25} color="white" />
          ),
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => (
            <Ionicons name="md-star" size={25} color="white" />
          ),
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Ionicons name="md-person" size={25} color="white" />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <NavigationContainer >
      
    </NavigationContainer>
  );
}

export default App;
