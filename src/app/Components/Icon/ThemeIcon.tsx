import React from "react";

interface ThemeIconProps {
  width: string;
  height: string;
  fill: string;
}
const ThemeIcon: React.FC<ThemeIconProps> = ({ width, height, fill }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 448 512"
      >
        <path d="M202.9 8.4c9.9-5.7 26-5.8 36-.2L430 115.9c10 5.6 18 19.4 18 30.9V364c0 11.4-8.1 25.3-18 31L238.8 503.7c-9.9 5.7-26 5.6-35.9-.2L17.9 395.1C8 389.3 0 375.4 0 364V146.7c0-11.4 8-25.4 17.9-31.1zm-77.4 199.8c-15.9 0-31.9 .1-47.8 .1v101.5H96.8V280h28.7c49.7 0 49.6-71.7 0-71.7zm140.1 100.3l-30.7-34.6c37-7.5 34.8-65.2-10.9-65.5-16.1 0-32.2-.1-48.3-.1v101.6h19.1v-33.9h18.4l29.6 33.9h22.8zm-41.6-82.3c23.3 0 23.3 32.5 0 32.5h-29.1v-32.5zm-95.6-1.6c21.2 0 21.1 38.9 0 38.9H96.2v-38.8zm192.7-18.3c-68.5 0-71 105.8 0 105.8 69.5 0 69.4-105.8 0-105.8zm0 17.4c44.1 0 44.8 70.9 0 70.9s-44.4-70.9 0-70.9z" />
      </svg>
    </div>
  );
};

export default ThemeIcon;
