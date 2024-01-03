import { Mail, SearchRounded} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const SearchBox = styled(Box)({
  backgroundColor: "white",
  color: "grey",
  alignItems: "center",
  borderRadius: ".5em",
  padding: "5px",
});

const rightIcons = styled(Box)({
  cursor:'pointer'
})

const Navbar = () => {
  return (
    <AppBar position="sticky" >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          SAHBEST
        </Typography>
        <SearchBox>
          <SearchRounded sx={{ mb: "-10px" }} />
          <InputBase placeholder="search here" />
        </SearchBox>
        <rightIcons>
        <Badge badgeContent={4} color="error">
          <Mail color="warning" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <Mail color="action" />
        </Badge>
        </rightIcons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
