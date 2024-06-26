import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Setting from './Setting';
import Adds from '../asset/Adds';
import Add from './Add';
import Homes from '../asset/Homes';
import Settings from '../asset/Settings';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity>
                <Homes />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="할일들"
        component={Add}
        options={{
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={{top: -10}}>
                <Adds />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '세팅',
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Settings />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
