import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/stories/theme'

export const withTheme = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <Story />
  </ThemeProvider>
)