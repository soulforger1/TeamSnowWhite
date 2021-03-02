import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const HearthIcon: React.FC<Props> = ({
  height = 20,
  width = 23,
  color = '#7C7C7C',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 20"
      fill="none"
      {...others}>
      <Path
        d="M3.747 9.117l7.824 7.824 7.824-7.824A3.689 3.689 0 0014.18 3.9L11.57 6.508 8.964 3.9a3.688 3.688 0 00-5.217 5.216zm6.955-6.956l.87.869.868-.87a6.147 6.147 0 118.694 8.694l-8.692 8.693a1.23 1.23 0 01-1.74 0l-8.693-8.692A6.148 6.148 0 1110.7 2.162l.001-.001z"
        fill={color}
      />
    </Svg>
  );
};
