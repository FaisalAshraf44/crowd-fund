import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function MoreIcon({style}: Props) {
  const {color = '#9C9C9C', width = 17, height = 17} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.20832 9.83332C7.59916 9.83332 7.74999 10.9833 7.74999 13.375C7.74999 14.5733 7.74999 15.4258 7.24666 16.05C6.66749 16.7692 5.61332 16.9167 4.20832 16.9167C2.80332 16.9167 1.74916 16.7692 1.16999 16.05C0.666656 15.4258 0.666656 14.5742 0.666656 13.3958L1.29166 13.375H0.666656C0.666656 10.9833 0.81749 9.83332 4.20832 9.83332ZM13.375 9.83332C16.7658 9.83332 16.9167 10.9833 16.9167 13.375C16.9167 14.5733 16.9167 15.4258 16.4133 16.05C15.8342 16.7692 14.78 16.9167 13.375 16.9167C11.97 16.9167 10.9158 16.7692 10.3367 16.05C9.83332 15.4258 9.83332 14.5742 9.83332 13.3958L10.4583 13.375H9.83332C9.83332 10.9833 9.98416 9.83332 13.375 9.83332ZM4.38012 11.0837L4.20832 11.0833C2.03418 11.0833 1.92268 11.2393 1.91697 13.0642L1.91731 13.7751C1.92127 14.5009 1.94892 15.0252 2.14249 15.2667C2.36332 15.54 3.01916 15.6667 4.20832 15.6667C5.39749 15.6667 6.05332 15.5392 6.27416 15.2658C6.49999 14.985 6.49999 14.3183 6.49999 13.395C6.49999 11.3115 6.49999 11.0935 4.38012 11.0837ZM13.5468 11.0837L13.375 11.0833C11.2008 11.0833 11.0893 11.2393 11.0836 13.0642L11.084 13.7751C11.0879 14.5009 11.1156 15.0252 11.3092 15.2667C11.53 15.54 12.1858 15.6667 13.375 15.6667C14.5642 15.6667 15.22 15.5392 15.4408 15.2658C15.6667 14.985 15.6667 14.3183 15.6667 13.395C15.6667 11.3115 15.6667 11.0935 13.5468 11.0837ZM4.20832 0.666656C7.59916 0.666656 7.74999 1.81666 7.74999 4.20832C7.74999 5.40666 7.74999 6.25916 7.24666 6.88332C6.66749 7.60249 5.61332 7.74999 4.20832 7.74999C2.80332 7.74999 1.74916 7.60249 1.16999 6.88332C0.666656 6.25916 0.666656 5.40749 0.666656 4.22916L1.29166 4.20832H0.666656C0.666656 1.81666 0.81749 0.666656 4.20832 0.666656ZM13.375 0.666656C16.7658 0.666656 16.9167 1.81666 16.9167 4.20832C16.9167 5.40666 16.9167 6.25916 16.4133 6.88332C15.8342 7.60249 14.78 7.74999 13.375 7.74999C11.97 7.74999 10.9158 7.60249 10.3367 6.88332C9.83332 6.25916 9.83332 5.40749 9.83332 4.22916L10.4583 4.20832H9.83332C9.83332 1.81666 9.98416 0.666656 13.375 0.666656ZM4.38012 1.91703L4.20832 1.91666C2.03418 1.91666 1.92268 2.07267 1.91697 3.89753L1.91731 4.60847C1.92127 5.33428 1.94892 5.85856 2.14249 6.09999C2.36332 6.37332 3.01916 6.49999 4.20832 6.49999C5.39749 6.49999 6.05332 6.37249 6.27416 6.09916C6.49999 5.81832 6.49999 5.15166 6.49999 4.22832C6.49999 2.14482 6.49999 1.92684 4.38012 1.91703ZM13.5468 1.91703L13.375 1.91666C11.2008 1.91666 11.0893 2.07267 11.0836 3.89753L11.084 4.60847C11.0879 5.33428 11.1156 5.85856 11.3092 6.09999C11.53 6.37332 12.1858 6.49999 13.375 6.49999C14.5642 6.49999 15.22 6.37249 15.4408 6.09916C15.6667 5.81832 15.6667 5.15166 15.6667 4.22832C15.6667 2.14482 15.6667 1.92684 13.5468 1.91703Z"
        fill={color}
      />
    </Svg>
  );
}

export default MoreIcon;
