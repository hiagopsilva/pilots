import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary50: string
      primary100: string
      primary200: string
      primary950: string

      neutro200: string
      neutro500: string
      neutro900: string
      neutro950: string

      base: string
      baseBlack: string
      background: string
      button: string
      textButton: string
      textInfo: string
      text: string
      textInfoSecond: string
    }

    fonts: {
      black: string
      bold: string
      extra_bold: string
      extra_light: string
      light: string
      medium: string
      regular: string
      semi_bold: string
      thin: string
    }
  }
}
