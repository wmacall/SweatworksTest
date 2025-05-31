import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const SaveIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M10.696 18.632L5.324 21.88c-.43.246-.958.072-1.194-.394v0a1.13 1.13 0 01-.108-.466V6.622c0-2.746 1.7-3.844 4.146-3.844h5.745c2.372 0 4.146 1.025 4.146 3.661v14.582c0 .26-.094.508-.26.692a.847.847 0 01-.627.287.905.905 0 01-.431-.119l-5.406-3.25a.616.616 0 00-.639 0z"
        stroke={props.fill || '#67686D'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
