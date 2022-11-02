import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Photo from '../../../public/img/photo.jpeg'

function Header() {
  return (
    <AppBar position="static" elevation={8}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5">About Me</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0, p: 1 }}>
            <Avatar
              alt="user-photo"
              src={Photo}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
