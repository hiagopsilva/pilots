import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const ThailandSVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_35_767">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_35_767)">
        <Path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <Path
          d="M23.2536 7.82617H0.746391C0.264 9.12616 0 10.5322 0 12.0001C0 13.4679 0.264 14.874 0.746391 16.174H23.2537C23.736 14.874 24 13.4679 24 12.0001C24 10.5322 23.736 9.12616 23.2536 7.82617Z"
          fill="#0052B4"
        />
        <Path
          d="M11.9999 0C8.36285 0 5.10396 1.61831 2.90332 4.17389H21.0965C18.8959 1.61831 15.637 0 11.9999 0Z"
          fill="#D80027"
        />
        <Path
          d="M21.0965 19.8262H2.90332C5.10396 22.3818 8.36285 24.0001 11.9999 24.0001C15.637 24.0001 18.8959 22.3818 21.0965 19.8262Z"
          fill="#D80027"
        />
      </G>
    </Svg>
  )
}

export default ThailandSVG
