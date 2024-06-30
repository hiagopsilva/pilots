import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const FranceSVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_35_763">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_35_763)">
        <Path
          d="M0.746338 16.1743C2.44185 20.7439 6.84037 24.0004 11.9999 24.0004C17.1595 24.0004 21.558 20.7439 23.2536 16.1743L11.9999 15.1309L0.746338 16.1743Z"
          fill="#FFDA44"
        />
        <Path
          d="M11.9999 0C6.84037 0 2.44185 3.2565 0.746338 7.82611L11.9999 8.86955L23.2536 7.82606C21.558 3.2565 17.1595 0 11.9999 0Z"
          fill="black"
        />
        <Path
          d="M0.746391 7.82617C0.264047 9.12616 0 10.5322 0 12.0001C0 13.4679 0.264047 14.874 0.746391 16.174H23.2537C23.736 14.874 24 13.4679 24 12.0001C24 10.5322 23.736 9.12616 23.2536 7.82617H0.746391Z"
          fill="#D80027"
        />
      </G>
    </Svg>
  )
}

export default FranceSVG