import Svg, {Path} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
  color?: string
}

const TrophySVG: FC<Props> = ({
  width = 20,
  height = 16,
  color = '#EF9120',
  ...rest
}) => {
  return (
    <Svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none">
      <Path
        d="M10.8333 12.115V13.8333H15V15.5H5.00001V13.8333H9.16668V12.115C7.55559 11.9118 6.07403 11.1277 5.00001 9.90979C3.926 8.69186 3.33337 7.12384 3.33334 5.5V0.5H16.6667V5.5C16.6666 7.12384 16.074 8.69186 15 9.90979C13.926 11.1277 12.4444 11.9118 10.8333 12.115V12.115ZM5.00001 2.16667V5.5C5.00001 6.82608 5.52679 8.09785 6.46448 9.03553C7.40216 9.97322 8.67393 10.5 10 10.5C11.3261 10.5 12.5979 9.97322 13.5355 9.03553C14.4732 8.09785 15 6.82608 15 5.5V2.16667H5.00001ZM0.833344 2.16667H2.50001V5.5H0.833344V2.16667ZM17.5 2.16667H19.1667V5.5H17.5V2.16667Z"
        fill={color}
      />
    </Svg>
  )
}

export default TrophySVG
