import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const FavouriteIcon: React.FC<Props> = ({
  width = 25,
  height = 25,
  color = '#181725',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      {...others}>
      <Path
        d="M3.738 9.01l7.824 7.824 7.824-7.824a3.689 3.689 0 00-5.216-5.217l-2.608 2.608-2.607-2.607A3.688 3.688 0 003.738 9.01zm6.955-6.956l.87.869.868-.87a6.147 6.147 0 118.694 8.694l-8.692 8.693a1.23 1.23 0 01-1.74 0L2 10.748a6.147 6.147 0 118.692-8.693l.001-.001z"
        fill={color}
        stroke="#fff"
        strokeWidth={0.1}
      />
    </Svg>
  );
};
