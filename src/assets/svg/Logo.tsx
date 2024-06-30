import Svg, {Path} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}
const LogoSVG: FC<Props> = ({width = 29, height = 37, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 37 29"
      fill="none">
      <Path
        d="M8.05886 2.63024C8.63148 2.20036 10.088 1.70491 11.0591 1.60969C11.2902 1.58705 11.7833 1.5776 12.1548 1.58878C13.8118 1.63847 15.4195 2.23586 16.4781 3.1951C16.6835 3.38135 17.4121 4.2742 17.3812 4.30188C17.3438 4.3355 16.3607 4.52753 15.9578 4.57999C15.4306 4.64856 15.1609 4.61084 14.5446 4.38227C13.8522 4.12538 13.7419 4.08603 13.4193 3.98082C12.9429 3.82547 12.1508 3.68427 11.6029 3.65713L11.0838 3.63137L11.4793 3.79927C11.8603 3.96094 12.4108 4.27143 12.6165 4.44057L13.012 4.76549C13.6147 5.26049 14.0243 5.39477 14.9154 5.38963C15.6794 5.38523 16.1111 5.29861 17.1492 4.94165C17.494 4.82304 17.8381 4.72604 17.9139 4.72604C18.1504 4.72604 20.203 5.47254 20.9096 5.81546C21.7252 6.21133 22.2842 6.7176 22.4858 7.24281C22.6151 7.57985 22.658 8.15687 22.5835 8.55769C22.4996 9.00918 22.1773 9.62388 21.7928 10.0656C21.667 10.2102 21.634 10.2265 21.5921 10.1645C21.5646 10.1237 21.5414 10.0459 21.5406 9.99147C21.5348 9.5599 21.2083 9.01329 20.8461 8.82848C20.4187 8.61044 19.881 8.53326 18.9344 8.55418C18.008 8.5746 17.4238 8.6539 16.6799 8.86027C16.1891 8.99643 15.4059 9.29915 14.9535 9.52757C14.0276 9.99493 12.6522 10.9318 11.8543 11.6387C10.4706 12.8645 9.17246 14.3857 8.22177 15.8954C7.94885 16.3288 7.38216 17.3429 7.19647 17.7301C6.59072 18.9934 6.24112 19.8891 5.99071 20.819C5.72096 21.8208 5.71507 21.8191 5.74459 20.7448C5.75912 20.2146 5.79205 19.5249 5.81776 19.2122C5.84347 18.8994 5.88915 18.3432 5.91921 17.9761C6.05181 16.3575 6.31993 14.5687 6.63442 13.2051C7.07049 11.3143 7.66126 9.6395 8.77847 7.12702C8.97119 6.69368 9.11872 6.32895 9.10636 6.31659C8.99106 6.2013 7.21639 8.57262 6.67066 9.57122C6.45891 9.95869 5.84421 11.1908 5.74568 11.4252C5.0452 13.092 4.5812 14.8465 4.35308 16.6907C4.23952 17.6089 4.21025 20.5316 4.30389 21.61C4.38512 22.5457 4.5236 23.4691 4.68201 24.1315C4.84304 24.8046 4.91769 25.1945 4.88531 25.1931C4.79572 25.1891 3.87746 23.4039 3.401 22.3075C2.52224 20.2853 1.98477 18.4215 1.68145 16.3446C1.54203 15.3901 1.55469 13.1388 1.70425 12.2905C2.06714 10.2319 2.72406 8.56367 3.93783 6.61833C4.52395 5.67895 5.72852 4.35147 6.72243 3.54969C7.10792 3.23871 7.80987 2.74841 7.86965 2.74841C7.88715 2.74841 7.97229 2.69526 8.05886 2.63024Z"
        fill="#D4FF79"
      />
      <Path
        d="M14.0008 15.6802C15.9907 14.711 18.3111 14.1337 20.7494 14.0011C21.2364 13.9746 23.0364 14.0201 23.5676 14.0723C25.1346 14.2263 27.1866 14.7178 28.6244 15.2836C29.8485 15.7652 31.1057 16.388 32.2938 17.101C32.59 17.2788 34.0576 18.2641 34.2526 18.4162C34.5615 18.6569 35.4256 19.3831 35.4158 19.3937C35.4115 19.3984 35.1857 19.337 34.9139 19.2572C33.5524 18.8575 31.2632 18.3544 29.1049 17.9805C26.6268 17.5512 23.4051 17.3796 21.0548 17.5517C17.5494 17.8085 14.5286 18.6333 12.0726 20.0041C11.991 20.0496 11.7908 20.1611 11.6276 20.2518C10.6949 20.7705 9.01297 22.0913 8.29697 22.8675C8.23259 22.9373 8.07547 23.1056 7.94772 23.2416C7.66744 23.5399 7.05902 24.268 6.74947 24.6754C6.51562 24.9831 5.76615 26.1 5.59958 26.389C5.32261 26.8694 5.62924 25.7661 6.19949 24.2304C7.60277 20.4513 10.3204 17.4727 14.0008 15.6802Z"
        fill="#D4FF79"
      />
      <Path
        d="M18.8213 20.3006C19.4853 20.1799 19.8338 20.1342 20.873 20.0319C20.9818 20.0212 21.503 20.0209 22.0311 20.0313C23.9662 20.0693 25.6728 20.4125 27.7453 21.1802C28.2961 21.3842 28.6366 21.5221 28.9287 21.6593C29.0664 21.7239 29.3904 21.8731 29.6488 21.9907C30.2536 22.2661 32.1244 23.2298 32.1004 23.2537C32.0904 23.2638 31.696 23.2159 31.2239 23.1474C25.9595 22.3831 21.8103 22.3371 17.7889 22.9981C16.3203 23.2395 15.2697 23.482 13.6547 23.9521C13.1155 24.1091 11.4973 24.6869 10.9355 24.923C9.71171 25.4374 8.53028 26.0218 7.67782 26.5346C7.40891 26.6963 7.18099 26.8208 7.1713 26.8111C7.13847 26.7783 8.11779 25.8141 8.61324 25.3915C11.1615 23.2177 13.4971 21.8809 16.5023 20.8761C17.2088 20.6399 17.9029 20.4677 18.8213 20.3006Z"
        fill="#D4FF79"
      />
    </Svg>
  )
}
export default LogoSVG
