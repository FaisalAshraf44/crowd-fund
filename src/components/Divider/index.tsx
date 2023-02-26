import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

interface DividerProps {
  height?: number;
  color?: string;
}

const Divider = ({height = 1, color = COLORS.lightGray}: DividerProps) => {
  return (
    <View style={{height: height, backgroundColor: color, width: '100%'}} />
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {},
});
