import 'styled-components'
import { defaultThemeStyle } from '../styles/themes/default.ts'

type ThemeType = typeof defaultThemeStyle

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
