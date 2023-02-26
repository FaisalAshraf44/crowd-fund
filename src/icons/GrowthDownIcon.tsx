import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: {
    color: string;
    width?: number;
    height?: number;
  };
};

function GrowthDownIcon({style}: Props) {
  const {color = '#CC3133', width = 16, height = 17} = style || {};
  return (
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none">
      <Path
        d="M11.3333 12.5C11.1445 12.5 10.986 12.436 10.858 12.308C10.73 12.18 10.6662 12.0218 10.6667 11.8333C10.6667 11.6444 10.7307 11.486 10.8587 11.358C10.9867 11.23 11.1449 11.1662 11.3333 11.1667H12.4L8.93334 7.73333L6.73334 9.93332C6.67778 9.98888 6.60845 10.0333 6.52534 10.0667C6.44223 10.1 6.35601 10.1167 6.26667 10.1167C6.17778 10.1167 6.09445 10.1 6.01667 10.0667C5.93889 10.0333 5.86667 9.98888 5.80001 9.93332L1.78334 5.88332C1.66112 5.7611 1.60001 5.6111 1.60001 5.43333C1.60001 5.25555 1.66667 5.09999 1.80001 4.96666C1.92223 4.84444 2.07778 4.78333 2.26667 4.78333C2.45556 4.78333 2.61112 4.84444 2.73334 4.96666L6.26667 8.49999L8.46667 6.29999C8.53334 6.23333 8.60556 6.18621 8.68334 6.15866C8.76112 6.1311 8.84445 6.1171 8.93334 6.11666C9.02223 6.11666 9.10556 6.13066 9.18334 6.15866C9.26112 6.18666 9.33334 6.23377 9.40001 6.29999L13.3333 10.2333V9.16666C13.3333 8.97777 13.3973 8.81955 13.5253 8.69199C13.6533 8.56444 13.8116 8.50044 14 8.49999C14.1889 8.49999 14.3473 8.56399 14.4753 8.69199C14.6033 8.81999 14.6671 8.97821 14.6667 9.16666V11.8333C14.6667 12.0222 14.6027 12.1807 14.4747 12.3087C14.3467 12.4367 14.1885 12.5004 14 12.5H11.3333Z"
        fill={color}
      />
    </Svg>
  );
}

export default GrowthDownIcon;