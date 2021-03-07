import * as React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const SettingsIcon: React.FC<Props> = ({
  height = 20,
  width = 20,
  color = '#181725',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...others}>
      <Circle
        cx={6.66174}
        cy={4.45795}
        r={3.3}
        stroke={color}
        strokeWidth={1.9}
      />
      <Rect
        x={0.892114}
        y={3.41641}
        width={3.30802}
        height={2.08304}
        rx={1.04152}
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
      <Circle
        cx={12.3185}
        cy={13.8066}
        r={3.3}
        transform="rotate(-180 12.319 13.807)"
        stroke={color}
        strokeWidth={1.9}
      />
      <Rect
        x={9.83395}
        y={3.41641}
        width={7.83623}
        height={2.08304}
        rx={1.04152}
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
      <Rect
        x={9.14622}
        y={14.8482}
        width={7.84}
        height={2.08304}
        rx={1.04152}
        transform="rotate(-180 9.146 14.848)"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
      <Rect
        x={17.9948}
        y={14.8482}
        width={2.84148}
        height={2.08304}
        rx={1.04152}
        transform="rotate(-180 17.995 14.848)"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
    </Svg>
  );
};
