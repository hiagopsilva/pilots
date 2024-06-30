import Svg, {Path} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const ArrowLeftSVG: FC<Props> = ({width = 8, height = 14, ...rest}) => {
  return (
    <Svg {...rest} height={height} width={width} viewBox="0 0 8 14" fill="none">
      <Path
        d="M2.828 6.99974L7.778 11.9497L6.364 13.3637L0 6.99974L6.364 0.635742L7.778 2.04974L2.828 6.99974Z"
        fill="#1B3102"
      />
    </Svg>
  )
}

export default ArrowLeftSVG
