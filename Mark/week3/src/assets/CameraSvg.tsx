import {Svg, Path} from 'react-native-svg';

export const CameraSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 16.73C13.0447 16.73 13.928 16.37 14.65 15.65C15.37 14.928 15.73 14.0447 15.73 13C15.73 11.9553 15.37 11.072 14.65 10.35C13.9273 9.63 13.044 9.27 12 9.27C10.956 9.27 10.0727 9.63 9.35 10.35C8.63 11.072 8.27 11.9553 8.27 13C8.27 14.0447 8.63033 14.928 9.351 15.65C10.0723 16.37 10.9553 16.73 12 16.73ZM12 15.73C11.2233 15.73 10.574 15.4693 10.052 14.948C9.53 14.4267 9.269 13.7773 9.269 13C9.269 12.2233 9.53 11.574 10.052 11.052C10.574 10.53 11.2233 10.269 12 10.269C12.7767 10.269 13.426 10.53 13.948 11.052C14.47 11.574 14.731 12.2233 14.731 13C14.731 13.7767 14.47 14.426 13.948 14.948C13.426 15.47 12.7767 15.731 12 15.731V15.73ZM4.615 20C4.155 20 3.771 19.846 3.463 19.538C3.15433 19.2293 3 18.845 3 18.385V7.615C3 7.155 3.15433 6.771 3.463 6.463C3.771 6.15433 4.155 6 4.615 6H7.573L9.423 4H14.577L16.427 6H19.385C19.845 6 20.229 6.15433 20.537 6.463C20.8457 6.771 21 7.155 21 7.615V18.385C21 18.845 20.846 19.229 20.538 19.537C20.2293 19.8457 19.845 20 19.385 20H4.615ZM4.615 19H19.385C19.5643 19 19.7117 18.9423 19.827 18.827C19.9423 18.7117 20 18.5643 20 18.385V7.615C20 7.43567 19.9423 7.28833 19.827 7.173C19.7117 7.05767 19.5643 7 19.385 7H15.988L14.144 5H9.856L8.012 7H4.615C4.43567 7 4.28833 7.05767 4.173 7.173C4.05767 7.28833 4 7.43567 4 7.615V18.385C4 18.5643 4.05767 18.7117 4.173 18.827C4.28833 18.9423 4.43567 19 4.615 19Z"
        fill={fill}
      />
    </Svg>
  );
};
