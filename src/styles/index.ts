import {
  moderateScale as mdscl,
  scale as sc,
  verticalScale as vtscl,
} from 'react-native-size-matters'

export const moderateScale = (value: number): string => `${mdscl(value)}px`
export const verticalScale = (value: number): string => `${vtscl(value)}px`
export const scale = (value: number): string => `${sc(value)}px`
