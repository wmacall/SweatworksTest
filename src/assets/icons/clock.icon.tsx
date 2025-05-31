import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ClockIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 14A6 6 0 108 2a6 6 0 000 12z"
        stroke={props.stroke || '#92929D'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 4.5V8h3.5"
        stroke={props.stroke || '#92929D'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
