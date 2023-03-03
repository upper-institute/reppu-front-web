import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../packages/stories/src/theme'

export const withTheme = (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
)