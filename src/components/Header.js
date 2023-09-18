import { Box, Container, Typography } from '@mui/material';
import { SearchForm } from '@/components';

export default function Header() {

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }

  return (
    <Box
      as="header"
      backgroundColor="#fff"
    >
      <Container
        sx={headerStyles}
      >
        <Typography
          variant="h5"
          py="24px"
          color="#000"
        >
          Simple Blog Test
        </Typography>
        <SearchForm />
      </Container>
    </Box>
  )
}