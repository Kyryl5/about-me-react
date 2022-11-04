import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import imgUrl from '../../../src/photo.jpeg'

function Header() {
  return (
    <AppBar
      position="static"
      elevation={8}
      style={{ backgroundColor: 'darkgreen' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          <h1>About Me</h1>
          <Avatar
            alt="user-photo"
            src={imgUrl}
            sx={{ width: 100, height: 100 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
