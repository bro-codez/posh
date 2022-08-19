/* eslint-disable prettier/prettier */
import React from 'react';

interface Props {
  size: number;
  color?: string;
}

export const ChevronLeft = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.84}
    viewBox="0 0 6.412 11.824"
  >
    <path
      d="M0,0,4,4.5,0,9"
      transform="translate(5 10.412) rotate(-180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Logo = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 41 41"
  >
    <g transform="translate(-191 -45)">
      <circle
        cx="20.5"
        cy="20.5"
        r="20.5"
        transform="translate(191 45)"
        fill="#1abe84"
      />
      <g
        transform="translate(204 58)"
        fill="#fb8f1d"
        stroke="#fff"
        strokeWidth="3"
      >
        <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
        <circle cx="7.5" cy="7.5" r="9" fill="none" />
      </g>
    </g>
  </svg>
);

export const Instagram = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
  >
    <path
      fill={color}
      d="M15.93,0H6.07A6.07,6.07,0,0,0,0,6.07V15.93A6.07,6.07,0,0,0,6.07,22H15.93A6.07,6.07,0,0,0,22,15.93V6.07A6.07,6.07,0,0,0,15.93,0Zm4.117,15.93a4.122,4.122,0,0,1-4.117,4.117H6.07A4.122,4.122,0,0,1,1.953,15.93V6.07A4.132,4.132,0,0,1,6.07,1.953H15.93A4.122,4.122,0,0,1,20.047,6.07Z"
    />
    <path
      fill={color}
      d="M5.679,0a5.671,5.671,0,1,0,5.679,5.663A5.681,5.681,0,0,0,5.679,0Zm0,9.389A3.718,3.718,0,1,1,9.405,5.663,3.722,3.722,0,0,1,5.679,9.389Z"
      transform="translate(5.321 5.337)"
    />
    <path
      fill={color}
      d="M1.432,0A1.39,1.39,0,0,0,.423.423,1.457,1.457,0,0,0,0,1.432,1.39,1.39,0,0,0,.423,2.441a1.457,1.457,0,0,0,1.009.423,1.39,1.39,0,0,0,1.009-.423,1.457,1.457,0,0,0,.423-1.009A1.39,1.39,0,0,0,2.441.423,1.363,1.363,0,0,0,1.432,0Z"
      transform="translate(15.475 3.677)"
    />
  </svg>
);

export const Twitter = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.8}
    viewBox="0 0 25.024 20"
  >
    <g transform="translate(0.025)">
      <path
        fill={color}
        d="M25.024,2.374a11.205,11.205,0,0,1-2.945.791A4.955,4.955,0,0,0,24.343.384a10.676,10.676,0,0,1-3.262,1.2,5.2,5.2,0,0,0-7.376-.1A4.854,4.854,0,0,0,12.2,5.06a6.163,6.163,0,0,0,.122,1.151A14.232,14.232,0,0,1,6.426,4.652,14.961,14.961,0,0,1,1.753.935a4.946,4.946,0,0,0-.706,2.542,4.756,4.756,0,0,0,.609,2.4,5.155,5.155,0,0,0,1.655,1.8A4.854,4.854,0,0,1,1,7.026V7.1a4.849,4.849,0,0,0,1.168,3.213,5.11,5.11,0,0,0,2.945,1.751,5.123,5.123,0,0,1-1.339.168,7.468,7.468,0,0,1-.974-.072,4.872,4.872,0,0,0,1.8,2.494,5.1,5.1,0,0,0,2.994,1.007,10.116,10.116,0,0,1-6.353,2.158A9.612,9.612,0,0,1,0,17.746,14.413,14.413,0,0,0,7.863,20,15.679,15.679,0,0,0,13,19.161a12.857,12.857,0,0,0,4.09-2.278A15.722,15.722,0,0,0,20.01,13.6a14.121,14.121,0,0,0,1.826-3.885,14.606,14.606,0,0,0,.609-4.053,4.584,4.584,0,0,0-.024-.647A10.384,10.384,0,0,0,25.024,2.374Z"
        transform="translate(-0.025)"
      />
    </g>
  </svg>
);

export const Facebook = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 2.2}
    viewBox="0 0 10 22"
  >
    <path
      fill={color}
      d="M6.647,7.21V5.305a4.893,4.893,0,0,1,.04-.655.975.975,0,0,1,.18-.451.792.792,0,0,1,.439-.307,2.974,2.974,0,0,1,.818-.082H9.98V0H7.006A4.661,4.661,0,0,0,3.333,1.25,5.392,5.392,0,0,0,2.216,4.937V7.21H0V11H2.216V22H6.647V11H9.6L10,7.21Z"
    />
  </svg>
);

export const LinkedIn = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22.978 22"
  >
    <path
      fill={color}
      d="M0,0H4.94V14.851H0Z"
      transform="translate(0.276 7.149)"
    />
    <path
      fill={color}
      d="M13.488,1.7A5.335,5.335,0,0,0,9.375,0,5.9,5.9,0,0,0,7.651.23a4.354,4.354,0,0,0-1.31.644,5.8,5.8,0,0,0-.85.782,5.289,5.289,0,0,0-.574.782V.322H0l.023.713c0,.483.023,1.954.023,4.437s0,5.7-.023,9.7H4.94V6.9A3.55,3.55,0,0,1,5.1,5.678a3.288,3.288,0,0,1,.942-1.287,2.386,2.386,0,0,1,1.585-.506,2.1,2.1,0,0,1,1.884.9,4.286,4.286,0,0,1,.6,2.46v7.931h4.917V6.667A6.89,6.89,0,0,0,13.488,1.7Z"
      transform="translate(7.95 6.805)"
    />
    <path
      fill={color}
      d="M2.78,0a2.781,2.781,0,0,0-2,.736A2.335,2.335,0,0,0,0,2.552,2.481,2.481,0,0,0,.758,4.391a2.725,2.725,0,0,0,1.976.736h.023a2.8,2.8,0,0,0,2.022-.736,2.445,2.445,0,0,0,.758-1.839A2.532,2.532,0,0,0,4.779.713,2.869,2.869,0,0,0,2.78,0Z"
    />
  </svg>
);

export const YouTube = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.714}
    viewBox="0 0 28.01 20"
  >
    <path
      fill={color}
      d="M27.986,7.65a20.171,20.171,0,0,0-.144-2.134,18.2,18.2,0,0,0-.336-2.3,3.658,3.658,0,0,0-1.079-1.918A3.338,3.338,0,0,0,24.484.384,101.673,101.673,0,0,0,14,0,101.673,101.673,0,0,0,3.525.384a3.338,3.338,0,0,0-1.942.911A3.658,3.658,0,0,0,.5,3.213a17.932,17.932,0,0,0-.36,2.3C.072,6.379.024,7.1,0,7.65,0,8.225,0,8.993,0,10s0,1.775.024,2.35a20.17,20.17,0,0,0,.144,2.134,14.867,14.867,0,0,0,.312,2.3,3.658,3.658,0,0,0,1.079,1.918,3.338,3.338,0,0,0,1.942.911A101.673,101.673,0,0,0,13.981,20a101.673,101.673,0,0,0,10.48-.384,3.2,3.2,0,0,0,1.942-.911,3.658,3.658,0,0,0,1.079-1.918,17.932,17.932,0,0,0,.36-2.3c.072-.863.12-1.583.144-2.134,0-.552.024-1.343.024-2.35S28.01,8.225,27.986,7.65Zm-8.441,3.189-8.01,5.012a.921.921,0,0,1-.528.168,1.18,1.18,0,0,1-.48-.12A.965.965,0,0,1,10,15.012v-10a.925.925,0,0,1,.528-.887.951.951,0,0,1,1.007.024l4,2.506,4,2.506a.9.9,0,0,1,.48.839A.939.939,0,0,1,19.544,10.839Z"
      transform="translate(0)"
    />
  </svg>
);

export const ChevronRight = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.64}
    viewBox="0 0 6.412 11.824"
  >
    <path
      d="M0,0,4,4.5,0,9"
      transform="translate(1.412 1.412)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const Star = ({ size, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25.125 23.951"
  >
    <g transform="translate(0.018 0)">
      <path
        d="M12.6,20.049l6,3.659a1.453,1.453,0,0,0,2.2-1.61l-1.61-6.878L24.6,10.537A1.508,1.508,0,0,0,23.725,7.9L16.7,7.317,13.92.878a1.54,1.54,0,0,0-2.78,0L8.359,7.463l-7.024.585a1.425,1.425,0,0,0-.878,2.488L5.871,15.22,4.262,22.1a1.479,1.479,0,0,0,2.2,1.61Z"
        transform="translate(-0.018 0)"
        fill={color}
      />
    </g>
  </svg>
);

export const Plus = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20.048 20"
  >
    <path
      d="M13.673,18.912l-.923-6.444a.629.629,0,0,1,.419-.586l6.459-.92c.252,0,.419-.251.419-.586l-.5-3.6c0-.251-.252-.418-.587-.418L12.5,7.28a.631.631,0,0,1-.587-.418L10.989.418C10.989.167,10.737,0,10.4,0L6.794.5c-.252,0-.419.251-.419.586L7.3,7.531a.629.629,0,0,1-.419.586L.419,9.038c-.252,0-.419.251-.419.586l.5,3.6c0,.251.252.418.587.418l6.459-.921a.631.631,0,0,1,.587.418l.923,6.444c0,.251.252.418.587.418l3.607-.5A.629.629,0,0,0,13.673,18.912Z"
      fill="#fdd08d"
    />
  </svg>
);

export const Circle = ({ size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25.946 26"
  >
    <defs>
      <linearGradient
        id="a"
        x1="0.299"
        y1="0.043"
        x2="0.704"
        y2="0.958"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#bff0dd" />
        <stop offset="1" stopColor="#57d2a3" />
      </linearGradient>
    </defs>
    <path
      d="M1.181,18.4A12.969,12.969,0,1,1,24.764,7.6,12.969,12.969,0,1,1,1.181,18.4Zm3.566-1.624A9.1,9.1,0,1,0,21.28,9.142,9.03,9.03,0,0,0,9.2,4.676,9.158,9.158,0,0,0,4.747,16.776Z"
      fill="url(#a)"
    />
  </svg>
);

export const Feature = ({ size, }: Props) => (
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
  width={size}
  height={size}
  viewBox="0 0 374.24 306.74"><defs><linearGradient id="a" x1="119.32" y1="148.05" x2="122.41" y2="-55.23" gradientTransform="matrix(1 0 0 -1 0 352)" gradientUnits="userSpaceOnUse"><stop offset=".01"/><stop offset=".08" stop-opacity=".69"/><stop offset=".21" stop-opacity=".32"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="-737.38" y1="90.09" x2="-734.81" y2="88.16" gradientTransform="rotate(180 -252.805 176)"/><linearGradient id="e" x1="-982.47" y1="326.9" x2="-328.94" y2="-161.88" gradientTransform="rotate(180 -252.805 176)"/><linearGradient id="f" x1="-762.66" y1="184.94" x2="-694.83" y2="-30.49" gradientTransform="rotate(180 -252.805 176)" /><linearGradient id="g" x1="-724.19" y1="225.84" x2="-765.66" y2="-54.52" gradientTransform="rotate(180 -266.045 167.505)" xlinkHref="#a"/><linearGradient id="h" x1="-765.32" y1="186.64" x2="-797.28" y2="-29.39" gradientTransform="rotate(180 -266.045 167.505)" xlinkHref="#a"/><linearGradient id="i" x1="-787.53" y1="122.49" x2="-804.53" y2="78.76" gradientTransform="rotate(180 -252.805 176)" xlinkHref="#a"/><linearGradient id="j" x1="-712.32" y1="295.39" x2="-639.47" y2="-340.86" gradientTransform="rotate(180 -252.805 176)" xlinkHref="#a"/><linearGradient id="k" x1="224.71" y1="268.52" x2="107.66" y2="67.13" xlinkHref="#a"/><linearGradient id="l" x1="189.86" y1="254.1" x2="226.57" y2="134.07" gradientTransform="matrix(1 0 0 -1 -26.48 335.01)" xlinkHref="#a"/><linearGradient id="c" x1="202.6" y1="221.13" x2="367.36" y2="55.32" gradientTransform="matrix(1 0 0 -1 0 352)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".54" stop-color="#fff"/></linearGradient><linearGradient id="b" x1="224.95" y1="119.19" x2="220.16" y2="216.78" gradientTransform="matrix(1 0 0 -1 0 352)" gradientUnits="userSpaceOnUse"><stop offset=".01"/><stop offset=".13" stop-opacity=".69"/><stop offset=".25" stop-opacity=".32"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="m" x1="291.73" y1="112.6" x2="275.79" y2="151.72" xlinkHref="#b"/><linearGradient id="n" x1="98.76" y1="129.88" x2="120.94" y2="129.88" xlinkHref="#a"/><linearGradient id="o" x1="89.54" y1="129.68" x2="97.96" y2="129.68" xlinkHref="#a"/><linearGradient id="p" x1="86.84" y1="188.87" x2="108.8" y2="127.49" xlinkHref="#a"/><linearGradient id="q" x1="148.71" y1="96.14" x2="163.73" y2="162.02" xlinkHref="#c"/><linearGradient id="r" x1="146.63" y1="96.61" x2="161.65" y2="162.49" xlinkHref="#c"/><linearGradient id="s" x1="150.08" y1="95.82" x2="165.09" y2="161.71" xlinkHref="#c"/><linearGradient id="t" x1="147.9" y1="96.32" x2="162.92" y2="162.2" xlinkHref="#c"/><linearGradient id="u" x1="147.45" y1="96.42" x2="162.46" y2="162.31" xlinkHref="#c"/><linearGradient id="v" x1="136.58" y1="98.9" x2="151.6" y2="164.78" xlinkHref="#c"/><linearGradient id="w" x1="137.12" y1="98.77" x2="152.13" y2="164.66" xlinkHref="#c"/><linearGradient id="x" x1="112.46" y1="104.4" x2="127.47" y2="170.28" xlinkHref="#c"/><linearGradient id="y" x1="113.57" y1="104.15" x2="128.59" y2="170.03" xlinkHref="#c"/><linearGradient id="z" x1="122.23" y1="102.17" x2="137.25" y2="168.05" xlinkHref="#c"/><linearGradient id="A" x1="104.71" y1="106.16" x2="119.73" y2="172.05" xlinkHref="#c"/><linearGradient id="B" x1="118.28" y1="103.07" x2="133.3" y2="168.96" xlinkHref="#c"/><linearGradient id="C" x1="116.2" y1="103.54" x2="131.22" y2="169.43" xlinkHref="#c"/><linearGradient id="D" x1="119.66" y1="102.76" x2="134.67" y2="168.64" xlinkHref="#c"/><linearGradient id="E" x1="117.46" y1="103.25" x2="132.48" y2="169.14" xlinkHref="#c"/><linearGradient id="F" x1="135.33" y1="99.18" x2="150.34" y2="165.07" xlinkHref="#c"/><linearGradient id="G" x1="133.22" y1="99.66" x2="148.23" y2="165.55" xlinkHref="#c"/><linearGradient id="H" x1="136.68" y1="98.88" x2="151.7" y2="164.76" xlinkHref="#c"/><linearGradient id="I" x1="134" y1="99.49" x2="149.02" y2="165.37" xlinkHref="#c"/></defs><path d="M170.52.32a218.94 218.94 0 00-104.33 33c-14.67 9.3-28.56 20.62-37.67 35.43s-12.88 33.57-7 49.91c3.51 9.71 10.11 17.95 14.82 27.13s7.42 20.48 2.73 29.67c-5.38 10.64-18.36 14.55-27.55 22.21-14.59 12.14-12.93 23.1-8 38.94 4.27 13.84 11.13 25.82 22.26 35.28 21.74 18.48 51.84 24.19 79.17 28.73 39.6 6.58 80.2 8.3 120.06 3 19.51-2.58 37.72-8 56.63-12.77 18.48-4.63 37.1-10.41 52.86-21.45a93.21 93.21 0 0028.4-120.88c-15.76-29-45.66-47.7-63.83-75.21-10.68-16.16-17.11-35.07-29.55-49.88-11.43-13.42-41.59-18.7-57.94-21.24A188.43 188.43 0 00186.82.06c-5.43-.12-10.87-.05-16.3.26z" fill="#4fc3f7" opacity=".18" /></svg>
);
