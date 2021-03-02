import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  others?: any;
}

export const LocationIcon: React.FC<Props> = ({
  width = 225,
  height = 172,
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 225 172"
      fill="none"
      {...others}>
      <Path
        d="M223.009 158.082L172.58 91.93a15.92 15.92 0 00-12.664-6.27H64.902a15.92 15.92 0 00-12.664 6.27L1.813 158.082c-4.24 5.564-.275 13.579 6.723 13.579h207.75c6.998-.004 10.964-8.019 6.723-13.579z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M4.653 158.219c-1.333 0-2.57.394-3.61 1.067-2.894 5.446.99 12.371 7.493 12.371h207.75c6.503 0 10.387-6.925 7.493-12.371a6.618 6.618 0 00-3.609-1.067H4.653z"
        fill="#C9CDD3"
      />
      <Path
        d="M90.764 119.679l36.081 38.54h-14.748l-31.93-33.9 10.597-4.64z"
        fill="#fff"
      />
      <Path
        d="M165.82 86.805a15.875 15.875 0 00-5.899-1.14h-18.329L14.623 141.277l-12.81 16.804c-.197.261-.37.527-.536.792l164.543-72.07z"
        fill="#FEE379"
      />
      <Path
        d="M1.282 158.874l78.884-34.555 31.931 33.9-110.815.655z"
        fill="#86ADFF"
      />
      <Path
        d="M14.623 141.278l126.969-55.614h-76.69a15.92 15.92 0 00-12.664 6.27l-37.615 49.344z"
        fill="#69CA9F"
      />
      <Path
        d="M190.583 115.548l-3.897-5.111-23.742 10.378-21.746-23.23-10.456 4.581 21.736 23.22-40.069 17.514 4.589 4.804 40.005-17.482 26.211 27.997h14.743l-30.488-32.572 23.114-10.099z"
        fill="#C9CDD3"
      />
      <Path
        opacity={0.3}
        d="M174.783 94.82l-2.203-2.89a15.92 15.92 0 00-12.664-6.27h-47.507v36.328l62.374-27.168z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M106.982 1.334C88.836 3.762 74.964 18.303 73.274 36.531 72.11 49.07 76.846 60.53 85.026 68.47a95.051 95.051 0 018.761 9.77c7.616 9.768 12.833 21.19 15.531 33.277l2.17 9.728a.947.947 0 001.851 0l2.303-10.342c2.62-11.752 7.644-22.867 15-32.398 2.624-3.398 5.5-6.6 8.647-9.545 7.653-7.167 12.439-17.362 12.439-28.68-.005-23.499-20.615-42.18-44.746-38.947z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M121.027 51.992c4.759-4.759 4.759-12.475 0-17.234-4.76-4.76-12.476-4.76-17.235 0-4.76 4.759-4.76 12.475 0 17.234 4.759 4.76 12.475 4.76 17.235 0z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={17.6003}
          y1={72.1646}
          x2={179.824}
          y2={207.009}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F6F8FF" />
          <Stop offset={1} stopColor="#DEE0ED" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={186.811}
          y1={63.873}
          x2={104.903}
          y2={113.851}
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={123.654}
          y1={82.7482}
          x2={94.9092}
          y2={-14.004}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#5565EE" />
          <Stop offset={0.3091} stopColor="#5F75FF" />
          <Stop offset={0.5137} stopColor="#6E89FA" />
          <Stop offset={0.7638} stopColor="#6E89FA" />
          <Stop offset={1} stopColor="#7D99FD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
