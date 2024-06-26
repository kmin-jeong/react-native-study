import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import COLORS, {Theme} from '../style/style';
import {useState} from 'react';

export default function Setting() {
  const theme: Theme[] = ['orange', 'green', 'blue', 'purple', 'pink'];
  const [themecolor, setThemeColor] = useState('');

  return (
    <SafeAreaView>
      <Text style={{margin: 20}}>색상을 선택해주세요</Text>
      <View style={styles.container}>
        <View style={styles.colorsBox}>
          {theme.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorButton, COLORS[color] as any]}
              onPress={() => setThemeColor(color)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 12,
  },
  colorsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
