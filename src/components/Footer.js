import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {

  const footerStyles = {
    backgroundColor: 'white',
    py: '24px',
    textAlign: 'center',
    borderTop: '1px solid black',
  }

  return (
    <Box
      sx={footerStyles}
    >
      <Typography
        color="#000"
      >
        Copyright © 2023 Dezanni Alavi. All Rights Reserved
      </Typography>
    </Box>
  )
}

export default Footer