import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowBack from '../../asset/Arrowback';

export const Back = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBack />
    </TouchableOpacity>
  );
};
