import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

export const StarIcon: React.FC<Props> = ({
  height = 15,
  width = 16,
  color = 'white',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      {...others}>
      <Path
        d="M8.3 11.97L3.75 14.36l.87-5.065L.937 5.71l5.086-.74L8.299.361H0v14h15.66v-14H8.3l2.274 4.608 5.085.74-3.68 3.587.87 5.065-4.55-2.392z"
        fill={color}
      />
    </Svg>
  );
};
