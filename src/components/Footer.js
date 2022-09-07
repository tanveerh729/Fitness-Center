import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#647493'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography>
          Created by Tanveer Hussain
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer