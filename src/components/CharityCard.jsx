import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import { styles } from "../styles";
import { SectionWrapper } from '../HOC';


const MultiActionAreaCard = () => {
  return (
    <motion.div variants={textVariant()}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Charity_Chain_logo}
            alt="charity chain"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cause
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={styles.mainSectionSubText}>
            Donate
          </Button>
        </CardActions>
      </Card> 
      </motion.div>
  );
}

export default SectionWrapper(MultiActionAreaCard, "")