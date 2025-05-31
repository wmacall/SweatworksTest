import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CalendarIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M13 2.5H3a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5zM11 1.5v2M5 1.5v2M2.5 5.5h11"
        stroke={props.stroke || '#92929D'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
