import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Setting from './Setting';
import Adds from '../asset/Adds';
import Add from './Add';
import Homes from '../asset/Homes';
import Settings from '../asset/Settings';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {useThema} from '../store/ThemeStore';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../style/style';

type TodoList = {
  Home: {todo: {id: string; text: string}} | undefined;
  Add: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<TodoList>();

type HomeScreen = RouteProp<TodoList, 'Home'>;

interface HomeProps {
  route: HomeScreen;
}

export default function Navigator({navigation}: any) {
  const {themeColor} = useThema();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: [styles.header],
          headerTitleStyle: {color: themeColor},
          title: 'Today',
          tabBarIcon: () => (
            <TouchableOpacity style={styles.button}>
              <Homes />
              <Text>Home</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Add')}
              style={styles.button}>
              <Adds />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerStyle: [styles.header],
          headerTitleStyle: {color: themeColor},
          tabBarIcon: () => (
            <TouchableOpacity style={styles.button}>
              <Settings />
              <Text>Setting</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: COLORS.gray,
    elevation: 0,
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
  font: {
    fontSize: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
  },
});
