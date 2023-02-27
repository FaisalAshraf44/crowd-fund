import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function FiltersIcon({style}: Props) {
  const {color = '#A8B0B9', width = 12, height = 8} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 12 8" fill="none">
      <Path
        d="M4.66667 8H7.33333V6.66667H4.66667V8ZM0 0V1.33333H12V0H0ZM2 4.66667H10V3.33333H2V4.66667Z"
        fill={color}
      />
    </Svg>
  );
}

export default FiltersIcon;
