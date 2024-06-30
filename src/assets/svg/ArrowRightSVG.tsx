import Svg, {Path} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const ArrowRightSVG: FC<Props> = ({width = 8, height = 14, ...rest}) => {
  return (
    <Svg {...rest} height={height} width={width} viewBox="0 0 8 14" fill="none">
      <Path
        d="M5.17266 6.99974L0.222656 2.04974L1.63666 0.635742L8.00066 6.99974L1.63666 13.3637L0.222656 11.9497L5.17266 6.99974Z"
        fill="#D4FF79"
      />
    </Svg>
  )
}

export default ArrowRightSVG
