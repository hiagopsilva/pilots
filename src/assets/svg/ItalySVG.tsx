import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg'

import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const ItalySVG: FC<Props> = ({width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      {...rest}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_35_667">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_35_667)">
        <Path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <Path
          d="M23.9999 11.9997C23.9999 6.84013 20.7434 2.44161 16.1738 0.746094V23.2534C20.7434 21.5578 23.9999 17.1593 23.9999 11.9997Z"
          fill="#D80027"
        />
        <Path
          d="M0 11.9997C0 17.1593 3.2565 21.5578 7.82611 23.2533V0.746094C3.2565 2.44161 0 6.84012 0 11.9997Z"
          fill="#6DA544"
        />
      </G>
    </Svg>
  )
}

export default ItalySVG
