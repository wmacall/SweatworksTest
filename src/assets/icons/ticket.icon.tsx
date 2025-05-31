import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const TicketIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M6 3.5v9M1.5 10.45a.499.499 0 01.4-.49 2 2 0 000-3.92.5.5 0 01-.4-.49V4a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v1.55a.5.5 0 01-.4.49 2 2 0 000 3.92.5.5 0 01.4.49V12a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-1.55z"
        stroke="#92929D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
