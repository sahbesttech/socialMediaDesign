import { Menu } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9,2,2,2,2,3,3,3];
  return (
    <Box flex="1" sx={{display:{xs:'none',md:'grid'}}}>
      <Box sx={{position:"fixed"}}>

      <List>
        {items.map((a) => (
          <ListItemButton component="a" href="#" sx={{borderRadius:"10px"}}>
            <ListItemIcon>
              <Menu />
            </ListItemIcon>
            <ListItemText primary="Menu items" />
          </ListItemButton>
        ))}
      </List>
        </Box>
    </Box>
  );
};

export default Sidebar;
