import { Box, Container, Typography } from '@mui/material';
import { SearchForm } from '@/components';

export default function Header() {

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }

  return (
    <Container
      sx={headerStyles}
    >
      <Typography>
        Simple Blog Test
      </Typography>
      <SearchForm />
    </Container>
  )
}