import {SafeAreaView, StatusBar} from 'react-native';

import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Add({submitHandler}: any) {
  const [text, setText] = useState('');

  const changeHandler = (val: any) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력하세요!"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="제출"
        color="FF8F50"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
