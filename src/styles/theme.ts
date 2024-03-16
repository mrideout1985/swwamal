import { createTheme } from '@mui/material'
const defaultTheme = createTheme()

const theme = createTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#35374B',
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
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3rem',
          fontWeight: 500,
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: 500,
        },
        h3: {
          fontSize: '2rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 500,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#35374B',
          color: '#fff',
          fontWeight: 'bold',
          padding: '16px',
          textAlign: 'left',
          textTransform: 'uppercase',
          borderBottom: '2px solid #f0f0f0',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:not(.MuiTableRow-head):nth-child(odd)': {
            backgroundColor: '#faa9cf',
          },
          color: '#ff0077',
        },
      },
      defaultProps: {
        style: {},
      },
    },
  },
})

export { theme }
