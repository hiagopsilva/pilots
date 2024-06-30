import Svg, {Path, Rect, Defs, ClipPath} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const CalendarSVG: FC<Props> = ({width = 14, height = 14, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 14 14"
      fill="none">
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.395721)"
          />
        </ClipPath>
      </Defs>
      <Path
        d="M9.91666 2.14572H12.25C12.4047 2.14572 12.5531 2.20717 12.6625 2.31657C12.7719 2.42597 12.8333 2.57434 12.8333 2.72905V12.0624C12.8333 12.2171 12.7719 12.3655 12.6625 12.4749C12.5531 12.5843 12.4047 12.6457 12.25 12.6457H1.74999C1.59528 12.6457 1.44691 12.5843 1.33751 12.4749C1.22811 12.3655 1.16666 12.2171 1.16666 12.0624V2.72905C1.16666 2.57434 1.22811 2.42597 1.33751 2.31657C1.44691 2.20717 1.59528 2.14572 1.74999 2.14572H4.08332V0.97905H5.24999V2.14572H8.74999V0.97905H9.91666V2.14572ZM2.33332 5.64572V11.4791H11.6667V5.64572H2.33332ZM3.49999 6.81238H4.66666V7.97905H3.49999V6.81238ZM6.41666 6.81238H7.58332V7.97905H6.41666V6.81238ZM9.33332 6.81238H10.5V7.97905H9.33332V6.81238Z"
        fill="white"
        clipPath="url(#clip0)"
      />
    </Svg>
  )
}

export default CalendarSVG
