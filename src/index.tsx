import React from 'react'
import Routes from './routes'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'

import '../ReactotronConfig.js'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
