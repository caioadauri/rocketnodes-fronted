import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes';

import theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
