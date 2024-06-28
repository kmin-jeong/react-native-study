import COLORS, {Theme} from '../style/style';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Complete} from './button/Complete';

type TodoList = {
  Home: {todo: {id: string; text: string}} | any;
  Add: undefined;
  Setting: undefined;
};

type AddScreen = NativeStackNavigationProp<TodoList, 'Add'>;

interface AddProps {
  navigation: AddScreen;
}

export default function Add({navigation}: AddProps) {
  const [text, setText] = useState('');

  const handleComplete = () => {
    if (text.length > 0) {
      navigation.navigate('Home', {
        todo: {
          id: Date.now().toString(),
          text: text.trim(),
        },
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => Complete({handleComplete}),
    });
  }, [navigation, text]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: '80%',
    height: 56,
    padding: 16,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    marginBottom: 16,
    borderRadius: 30,
  },
});
