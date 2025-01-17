import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const SpainSVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_35_777">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_35_777)">
        <Path
          d="M0 11.9996C0 13.4674 0.264047 14.8735 0.746391 16.1735L12 17.217L23.2536 16.1735C23.736 14.8735 24 13.4674 24 11.9996C24 10.5318 23.736 9.1257 23.2536 7.82571L12 6.78223L0.746391 7.82571C0.264047 9.1257 0 10.5318 0 11.9996H0Z"
          fill="#FFDA44"
        />
        <Path
          d="M23.2536 7.82611C21.558 3.25655 17.1595 0 11.9999 0C6.84037 0 2.44185 3.25655 0.746338 7.82611H23.2536Z"
          fill="#D80027"
        />
        <Path
          d="M0.746338 16.1738C2.44185 20.7434 6.84037 23.9999 11.9999 23.9999C17.1595 23.9999 21.558 20.7434 23.2536 16.1738H0.746338Z"
          fill="#D80027"
        />
      </G>
    </Svg>
  )
}

export default SpainSVG
