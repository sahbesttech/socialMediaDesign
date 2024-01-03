import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex="1" sx={{display:{xs:'none',md:'grid'}}}>
      <Box sx={{ position: "fixed" }}>
        <Typography
          paragraph
          my={3}
          align="center"
          fontWeight="light"
          gutterBottom
        >
          online friends
        </Typography>
        <Box alignItems="center" display="flex">
          <AvatarGroup max={4} sx={{ align: "center", margin: "auto" }}>
            <Avatar src="">A</Avatar>
            <Avatar src="">A</Avatar>
            <Avatar src="">A</Avatar>
            <Avatar src="">A</Avatar>
            <Avatar src="">A</Avatar>
            <Avatar src="">A</Avatar>
          </AvatarGroup>
        </Box>
        <Typography align="center" my={3}>
          latest photos
        </Typography>
        <ImageList rowHeight={"100"} cols={3} sx={{ my: "30px" }}>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="src\assets\images\img.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography align="center">latest conversation</Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="src\assets\images\img.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Saheed Adebayo"
              secondary={
                <>
                  <Typography paragraph>yes its always this intense</Typography>
                  {"- by shade ololade"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar src="src\assets\images\img.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Saheed Adebayo"
              secondary={
                <>
                  <Typography paragraph>yes its always this intense</Typography>
                  {"- by shade ololade"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar src="src\assets\images\img.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Saheed Adebayo"
              secondary={
                <>
                  <Typography paragraph>yes its always this intense</Typography>
                  {"- by shade ololade"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar src="src\assets\images\img.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Saheed Adebayo"
              secondary={
                <>
                  <Typography paragraph>yes its always this intense</Typography>
                  {"- by shade ololade"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar src="src\assets\images\img.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Saheed Adebayo"
              secondary={
                <>
                  <Typography paragraph>yes its always this intense</Typography>
                  {"- by shade ololade"}
                </>
              }
            />
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
