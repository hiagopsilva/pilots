import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'
import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const DutchSVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_35_734">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_35_734)">
        <Path
          d="M16.174 0.746391C14.874 0.264047 13.4679 0 12.0001 0C10.5322 0 9.12618 0.264047 7.8262 0.746391L6.78271 12L7.8262 23.2536C9.12618 23.736 10.5322 24 12.0001 24C13.4679 24 14.874 23.736 16.174 23.2536L17.2175 12L16.174 0.746391Z"
          fill="#21468B"
        />
        <Path
          d="M23.9999 11.9997C23.9999 6.84013 20.7434 2.44156 16.1738 0.746094V23.2534C20.7434 21.5578 23.9999 17.1593 23.9999 11.9997Z"
          fill="#FFFFFF"
        />
        <Path
          d="M0 11.9997C0 17.1593 3.2565 21.5577 7.82611 23.2533V0.746094C3.2565 2.44156 0 6.84012 0 11.9997Z"
          fill="#AE1C28"
        />
      </G>
    </Svg>
  )
}

export default DutchSVG
