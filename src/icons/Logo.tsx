import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function Logo({style}: Props) {
  const {width = 24, height = 24} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.5 23.75C7.95 23.75 7.5 23.3 7.5 22.75V18.1C7.5 17.55 7.95 17.1 8.5 17.1C9.05 17.1 9.5 17.55 9.5 18.1V22.75C9.45 23.3 9 23.75 8.5 23.75Z"
        fill="#2D53DA"
      />

      <Path
        d="M21.2 23.75H9.84998C9.29998 23.75 8.84998 23.3 8.84998 22.75C8.84998 22.2 9.29998 21.75 9.84998 21.75H20.2V2.2H10.85V7.2C10.85 7.75 10.4 8.2 9.84998 8.2C9.29998 8.2 8.84998 7.75 8.84998 7.2V1.2C8.84998 0.649997 9.29998 0.199997 9.84998 0.199997H21.2C21.75 0.199997 22.2 0.649997 22.2 1.2V22.75C22.15 23.3 21.7 23.75 21.2 23.75Z"
        fill="black"
      />

      <Path
        d="M14.15 23.75H2.79999C2.24999 23.75 1.79999 23.3 1.79999 22.75V9.59999C1.79999 9.14999 2.09999 8.79999 2.49999 8.64999L13.85 5.19999C14.15 5.09999 14.45 5.14999 14.7 5.34999C14.95 5.54999 15.1 5.84999 15.1 6.14999V22.75C15.15 23.3 14.7 23.75 14.15 23.75ZM3.79999 21.8H13.15V7.49999L3.79999 10.3V21.8Z"
        fill="#2D53DA"
      />
      <Path
        d="M22.75 23.75H1.25C0.7 23.75 0.25 23.3 0.25 22.75C0.25 22.2 0.7 21.75 1.25 21.75H22.8C23.35 21.75 23.8 22.2 23.8 22.75C23.8 23.3 23.3 23.75 22.75 23.75Z"
        fill="black"
      />
    </Svg>
  );
}

export default Logo;