import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultThemeStyle } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultThemeStyle}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
