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
import { useState, useEffect, useContext } from 'react';
import { db, auth } from '../firebase';
import { getDatabase, ref, set, get } from "firebase/database";
import { Link } from 'react-router-dom';


const MultiActionAreaCard = ({ charity }) => {
  const { id, image, name, cause, current, goal, url } = charity;
  const progress = (current/goal)*100;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const remainingAmount = current >= goal ? current - goal : goal - current;


  const handleDonation = () => {
    if (donationAmount > 0) {
      const charityRef = ref(db, `/Charities/${charity.id}`);
      const user = auth.currentUser;
  
      if (user) {
        const userRef = ref(db, `/Users/${user.uid}`);
  
        const newCurrent = parseInt(current) + parseInt(donationAmount);
  
        set(charityRef, { ...charity, current: newCurrent })
          .then(() => {
            const userRef = ref(db, `/Users/${user.uid}/Donations/${cause}`);
            get(userRef).then((snapshot) => {
              if (snapshot.exists()) {
                const currentDonation = parseInt(snapshot.val()) + parseInt(donationAmount);
                set(userRef, currentDonation);
              } else {
                set(userRef, donationAmount);
              }
            });
  
            const userTotalRef = ref(db, `/Users/${user.uid}/Total`);
            get(userTotalRef).then((snapshot) => {
              if (snapshot.exists()) {
                const total = parseInt(snapshot.val()) + parseInt(donationAmount);
                set(userTotalRef, total);
              } else {
                set(userTotalRef, donationAmount);
              }
            });
          })
          .catch((error) => {
            alert('Failed to update the charity. Please try again later.');
          });
      } else {
        alert('User is not authenticated. Please log in before donating.');
      }
    } else {
      alert('Invalid donation amount. Please enter a valid amount.');
    }
    if (current + donationAmount >= goal) {
      setPopupOpen(false);
      setShareLink(`http://localhost:5173/`);
      setShowSharePopup(true);
    } else {
      setShowSharePopup(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        console.log('Link copied to clipboard');
      })
      .catch((error) => {
        alert('Failed to copy link to clipboard');
      });
  };
  const linearProgressBarColor = current >= goal ? "green" : "primary";
  return (
    
      <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
        
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
            <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: "5px", backgroundColor: linearProgressBarColor, }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif', marginTop: '5px' }}>
            {current >= goal ? `Amazing: $(${current} of $${goal})` : `Current: $${current} of $${goal}`}
            </Typography>
          </CardContent>
        
        <CardActions>
          <Button size="medium" sx={{ fontFamily: 'Poppins, sans-serif', color: "#0E8388"}} onClick={() => setPopupOpen(true)}>
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
            <p className="text-black">
          {current >= goal
            ? `Amount Exceeding Goal: $${remainingAmount}`
            : `Amount Left Till Goal: $${remainingAmount}`}
        </p>
            <Button
              variant="contained"
              onClick={handleDonation}
              sx={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#0E8388', color: 'white' }}
            >
              Donate
            </Button>
          </div>
          </Popup>
          {showSharePopup && (
          <Popup open={showSharePopup} onClose={() => setShowSharePopup(false)} modal closeOnDocumentClick contentStyle={{ borderRadius: '15px', padding: '20px' }}>
            <div className="relative">
              <p className="text-black mb-2">Share your donation!</p>
              <div>
                <a href={shareLink} target="_blank" rel="noopener noreferrer" className='text-black mr-5'>Share Link</a>
                <button onClick={copyToClipboard} className='bg-black p-2 rounded-full'>Copy to Clipboard</button>
              </div>
            </div>
          </Popup>
        )}
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