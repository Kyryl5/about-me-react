import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import imgUrl from "../../../src/photo.jpeg";

function Header() {
  return (
    <AppBar position="static" elevation={8}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <h1>About Me</h1>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0, p: 1 }}>
            <Avatar
              alt="user-photo"
              src={imgUrl}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
