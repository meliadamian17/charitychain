import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, LinearProgress, TextField } from '@mui/material';
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import { styles } from "../styles";
import { SectionWrapper } from '../HOC';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import { db } from '../firebase';
import { firebaseConfig } from '../firebase';
import { getDatabase, ref, set, update } from "firebase/database";
import { Link } from 'react-router-dom';


const MultiActionAreaCard = ({ charity }) => {
  const { id, image, name, cause, current, goal, url } = charity;
  const progress = (current/goal)*100;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const remainingAmount = goal - current;

  const handleDonation = () => {
    if (donationAmount > 0 && donationAmount <= remainingAmount) {
      const charityRef = ref(db, `/Charities/${charity.id}`);
  
      const newCurrent = parseInt(current) + parseInt(donationAmount);
  
      set(charityRef, { ...charity, current: newCurrent })
        .then(() => {
          setPopupOpen(false);
        })
        .catch((error) => {
          alert('Failed to update the charity. Please try again later.');
        });
    } else {
      alert('Invalid donation amount. Please enter a valid amount.');
    }
  };

  return (
    
      <Card sx={{ maxWidth: 345, borderRadius: "10px", opacity: current === goal ? 0.5 : 1, }}>
        
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
            {current === goal ? `Completed $(${current} of $${goal})` : `Current: $${current} of $${goal}`}
            </Typography>
          </CardContent>
        
        <CardActions>
          <Button size="medium" sx={{ fontFamily: 'Poppins, sans-serif', color: "#0E8388"}} onClick={() => setPopupOpen(true)} disabled={current === goal}>
            Donate
          </Button>
          <Popup open={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          modal
          closeOnDocumentClick
          contentStyle={{ borderRadius: '15px', padding: '20px' }}
          >
          <div className="relative">
            <img
              src="../src/assets/close.png"
              alt="Close"
              height={30}
              width={30}
              className="custom-close-button absolute top-2 right-2 cursor-pointer"
              onClick={() => setPopupOpen(false)}
            />
            <p className="text-black mb-2">Enter donation details here...</p>
            <TextField
              label="Donation Amount"
              variant="outlined"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
            <p className="text-black">Amount Left Till Goal: ${remainingAmount}</p>
            <Button
              variant="contained"
              onClick={handleDonation}
              sx={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#0E8388', color: 'white' }}
            >
              Donate
            </Button>
          </div>
          </Popup>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <img
              src="../src/assets/info.png"
              alt="Info"
              height={20}
              width={20}
              className="custom-close-button absolute bottom-4 right-12 cursor-pointer"
            />
          </Link>
        </CardActions>
      </Card> 
    
  );
}

export default  MultiActionAreaCard;