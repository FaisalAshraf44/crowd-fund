import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function ArrowDownIcon({style}: Props) {
  const {color = '#A8B0B9', width = 8, height = 4} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 8 4" fill="none">
      <Path
        d="M0.666656 0.666687L3.99999 4.00002L7.33332 0.666687H0.666656Z"
        fill={color}
      />
    </Svg>
  );
}

export default ArrowDownIcon;
