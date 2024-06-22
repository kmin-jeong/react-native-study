import React from 'react';
import {Path, Svg} from 'react-native-svg';
import THEME_COLOR from '../../styles/theme-color';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {StyleSheet, Text, View} from 'react-native';

const SettingSvg = ({color}: {color?: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.954 20H5C4.71933 20 4.48267 19.9033 4.29 19.71C4.09667 19.518 4 19.2813 4 19V15.046C4.56933 14.8793 5.045 14.5643 5.427 14.101C5.809 13.6377 6 13.104 6 12.5C6 11.896 5.809 11.3623 5.427 10.899C5.045 10.4357 4.56933 10.1207 4 9.95399V5.99999C4 5.71932 4.09667 5.48266 4.29 5.28999C4.482 5.09666 4.71867 4.99999 5 4.99999H9C9.18 4.42799 9.49533 3.97099 9.946 3.62899C10.3973 3.28632 10.9153 3.11499 11.5 3.11499C12.0847 3.11499 12.6027 3.28632 13.054 3.62899C13.5047 3.97099 13.82 4.42799 14 4.99999H18C18.2807 4.99999 18.5173 5.09666 18.71 5.28999C18.9033 5.48266 19 5.71932 19 5.99999V9.99999C19.572 10.18 20.029 10.4953 20.371 10.946C20.7137 11.3973 20.885 11.9153 20.885 12.5C20.885 13.0847 20.7137 13.6027 20.371 14.054C20.029 14.5047 19.572 14.82 19 15V19C19 19.2807 18.9033 19.5173 18.71 19.71C18.5173 19.9033 18.2807 20 18 20H14.046C13.866 19.3973 13.5427 18.9133 13.076 18.548C12.6087 18.1827 12.0833 18 11.5 18C10.9167 18 10.3913 18.1827 9.924 18.548C9.45733 18.9133 9.134 19.3973 8.954 20Z"
        fill={color}
      />
    </Svg>
  );
};

export const SettingIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <MaskedView
      maskElement={
        <View style={styles.container}>
          <SettingSvg color={THEME_COLOR.White} />
          <Text style={{color: THEME_COLOR.Gray[400]}}>설정</Text>
        </View>
      }>
      <LinearGradient
        colors={[THEME_COLOR.Pink, THEME_COLOR.Purple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.container}>
          <SettingSvg />
          <Text style={{opacity: 0}}>설정</Text>
        </View>
      </LinearGradient>
    </MaskedView>
  ) : (
    <View style={styles.container}>
      <SettingSvg color={THEME_COLOR.Gray[400]} />
      <Text style={{color: THEME_COLOR.Gray[400]}}>설정</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
});

export default SettingIcon;
