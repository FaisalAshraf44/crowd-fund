import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function CloseIcon({style}: Props) {
  const {color, width, height} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15 15L1 1M15 1L1 15"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
