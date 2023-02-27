import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../constants';

interface DividerProps {
  height?: number;
  color?: string;
  verticalSpacing?: boolean;
}

const Divider = ({
  height = 1,
  color = COLORS.lightGray,
  verticalSpacing,
}: DividerProps) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: color,
        width: '100%',
        marginVertical: verticalSpacing ? 16 : 0,
      }}
    />
  );
};

export default Divider;
