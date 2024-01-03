import { FavoriteOutlined, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import imgsun from '../assets/images/img.jpg'

const Feeds = () => {
  const cards = [1,2,3,4,5,6,7,8]
  return (
    <Box flex='3' sx={{mx:'20px'}}>
      {cards.map((card)=>(
     <Card sx={{my:'30px'}}>
      <CardHeader
        avatar={
          <Avatar src='' alt='img'/>
        } 
        action={
          <IconButton>
            <MoreVert/>
          </IconButton>
        }

        title='This is the title'
        subheader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nes
        ciunt quod pariatur quam officia, sed maiores."
        />
        <CardMedia
        image={imgsun}
        component='img'
        alt='this is the alt'
        height="50%"
        />
        <CardActionArea>
          <CardContent>
            <Typography variant='h6' fontWeight='bold' gutterBottom>this is the title everyone is looking foreard to</Typography>
            <Typography variant='body' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta odit nihil dolor dignissimos culpa quas ex quo nisi! Quas eligendi
             laborum quaerat quia corporis aspernatur nulla quam blanditiis earum quis?</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteOutlined/>
            </IconButton>
            <IconButton>
              <Share/>
            </IconButton>
            
          </CardActions>
        </CardActionArea>
     </Card>
      ))}
    </Box>
  )
}

export default Feeds