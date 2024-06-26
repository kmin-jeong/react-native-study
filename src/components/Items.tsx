import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default function Items({item, pressHandler}: any) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View>
        <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
});
