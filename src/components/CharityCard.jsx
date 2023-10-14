import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, LinearProgress } from '@mui/material';
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import { styles } from "../styles";
import { SectionWrapper } from '../HOC';


const MultiActionAreaCard = ({ charity }) => {
  const { image, name, cause, current, goal, url } = charity;

  const progress = (current/goal)*100;

  return (
    
      <Card sx={{ maxWidth: 345, borderRadius: "10px"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            maxHeight={250}
            image={image}
            alt="charity chain"
            className=""
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:'Poppins, sans-serif' }}>
              { name }
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily:'Poppins, sans-serif' }}>
              { cause }
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: "5px" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Current: {current} of {goal}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" sx={{ fontFamily: 'Poppins, sans-serif', color: "#0E8388"}}>
            Donate
          </Button>
        </CardActions>
      </Card> 
    
  );
}

export default  MultiActionAreaCard;