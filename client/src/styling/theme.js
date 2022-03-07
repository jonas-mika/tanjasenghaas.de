import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      cursor: 'none'
    },
    body: {
      bg: mode('#ffffff', '#202023')(props)
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

/*
const components = {
  Heading: {
    sizes: {
      sm: { fontSize: '1rem', color: 'blue' },
      md: { fontSize: '1.2rem', color: 'green' },
      lg: { fontSize: '1.5rem', color: 'red' },
      xl: { fontSize: '1.7rem', color: 'pink' },
    },
  },
}
*/

const fonts = {
  heading: "Roboto",
  body: "Roboto"
}

const sizes = {
  sm: '20px',
  md: '40px',
  lg: '60px',
  xl: '80px',
}

const colors = {
  grassTeal: '#88ccca'
}

const breakpoints = createBreakpoints({
  sm: '30em', // 480px 
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
})


const Theme = extendTheme({ styles, config, sizes, colors, fonts, breakpoints })
export default Theme
