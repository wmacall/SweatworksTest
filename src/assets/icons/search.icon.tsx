import * as React from 'react';
import Svg, {Ellipse, Path, SvgProps} from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Ellipse
        cx={10.7885}
        cy={11.7666}
        rx={8.14181}
        ry={8.98856}
        stroke={props.fill || '#67686D'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.451 18.485L19.643 22"
        stroke={props.fill || '#67686D'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
