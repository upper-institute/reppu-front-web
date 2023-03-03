import 'styled-components'

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}

interface Colors {
    main: string
    secondary: string
}

declare module 'styled-components' {    
    export interface DefaultTheme {
      borderRadius: string
      colors: Colors
    }
  }