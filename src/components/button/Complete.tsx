import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useThema} from '../../store/ThemeStore';

type Complete = {
  handleComplete?: () => void;
  navigation?: any;
};

export const Complete = ({handleComplete, navigation}: Complete) => {
  const {themeColor} = useThema();

  return (
    <TouchableOpacity onPress={handleComplete}>
      <Text style={{color: themeColor}}>완료</Text>
    </TouchableOpacity>
  );
};
