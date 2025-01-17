import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const SwedenSVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_37_795">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_37_795)">
        <Path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#FFDA44"
        />
        <Path
          d="M9.3914 10.4348H23.8985C23.1315 4.54697 18.0969 0 12 0C11.1041 0 10.2313 0.0990469 9.39136 0.285234V10.4348H9.3914Z"
          fill="#0052B4"
        />
        <Path
          d="M6.26084 10.4347V1.45898C2.96581 3.25683 0.607016 6.55453 0.101562 10.4347H6.26084V10.4347Z"
          fill="#0052B4"
        />
        <Path
          d="M6.2608 13.5654H0.101562C0.607016 17.4456 2.96581 20.7433 6.26084 22.5411L6.2608 13.5654Z"
          fill="#0052B4"
        />
        <Path
          d="M9.39136 13.5655V23.715C10.2313 23.9012 11.1041 24.0002 12 24.0002C18.0969 24.0002 23.1315 19.4533 23.8985 13.5654H9.39136V13.5655Z"
          fill="#0052B4"
        />
      </G>
    </Svg>
  )
}

export default SwedenSVG
