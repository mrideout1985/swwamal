import { createTheme } from '@mui/material'
const defaultTheme = createTheme()

const theme = createTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#e780ae',
    },
    secondary: {
      main: '#a31454ff',
    },
    error: {
      main: '#e57373',
    },
    warning: {
      main: '#ffb74d',
    },
    info: {
      main: '#64b5f6',
    },
    success: {
      main: '#81c784',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            fontWeight: 500,
            fontSize: '1rem',
          },
        },
      ],
    },
  },
})

export { theme }
