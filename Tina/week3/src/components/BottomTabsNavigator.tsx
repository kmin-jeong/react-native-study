import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import THEME_COLOR from '../styles/theme-color';
import HomeIcon from './icons/HomeIcon';
import SettingIcon from './icons/SettingIcon';
import BottomSheet from './PhotoBottomSheet';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 80,
            backgroundColor: THEME_COLOR.Gray[900],
            paddingVertical: 20,
            borderTopWidth: 0.2,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
            headerShown: false,
            tabBarLabelStyle: {
              opacity: 0,
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => <SettingIcon focused={focused} />,
            headerShown: false,
            tabBarLabelStyle: {
              opacity: 0,
            },
          }}
        />
      </Tab.Navigator>
      <BottomSheet />
    </>
  );
};

export default BottomTabsNavigator;
