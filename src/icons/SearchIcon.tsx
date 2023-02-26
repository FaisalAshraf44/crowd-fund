<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"></svg>;
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function SearchIcon({style}: Props) {
  const {color = '#A7A7A7', width = 20, height = 20} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7825 1.66667C14.2575 1.66667 17.8975 5.30667 17.8975 9.78167C17.8975 11.893 17.0873 13.8186 15.7614 15.2638L18.3703 17.8673C18.6145 18.1114 18.6153 18.5064 18.3712 18.7506C18.2495 18.8739 18.0887 18.9348 17.9287 18.9348C17.7695 18.9348 17.6095 18.8739 17.487 18.7523L14.8466 16.1192C13.4576 17.2315 11.6964 17.8975 9.7825 17.8975C5.3075 17.8975 1.66667 14.2567 1.66667 9.78167C1.66667 5.30667 5.3075 1.66667 9.7825 1.66667ZM9.7825 2.91667C5.99667 2.91667 2.91667 5.99584 2.91667 9.78167C2.91667 13.5675 5.99667 16.6475 9.7825 16.6475C13.5675 16.6475 16.6475 13.5675 16.6475 9.78167C16.6475 5.99584 13.5675 2.91667 9.7825 2.91667Z"
        fill={color}
      />
    </Svg>
  );
}

export default SearchIcon;
