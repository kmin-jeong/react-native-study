/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Add from './src/components/Add';
import Navigator from './src/components/Navigator';
import {Back} from './src/components/button/Back';
import {Complete} from './src/components/button/Complete';
import {useThema, ThemeProvider} from './src/store/ThemeStore';
import COLORS from './src/style/style';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Tab"
            component={Navigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={({navigation}) => {
              const {themeColor} = useThema();
              return {
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '할 일을 추가해주세요!',
                headerTitleStyle: {color: themeColor, fontSize: 18},
                headerBackTitleVisible: false,
                headerLeft: () => Back({navigation}),
                headerRight: () => Complete({navigation}),
                headerStyle: styles.header,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gray,
  },
});

export default App;
