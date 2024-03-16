import { Container, Paper, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Paper component="footer" elevation={3} sx={{ py: 3, mt: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          South West Wales Amalgamated
        </Typography>
        <Typography variant="body2" align="center"></Typography>
      </Container>
    </Paper>
  )
}

export default Footer
