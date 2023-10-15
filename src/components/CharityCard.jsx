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
  const [isInvalidAmount, setIsInvalidAmount] = useState(false);


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
            if (current + donationAmount >= goal) {
              setPopupOpen(false);
              setShareLink(`http://localhost:5173/`);
              setShowSharePopup(true);
            } else {
              setPopupOpen(false);
              setShowSharePopup(true);
            }
          })
          .catch((error) => {
            alert('Failed to update the charity. Please try again later.');
          });
      } else {
        alert('User is not authenticated. Please log in before donating.');
      }
    } else {
      setIsInvalidAmount(true);
    }
    setPopupOpen(true);
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
            <LinearProgress variant="determinate" value={current >= goal ? 100 : progress} sx={{ height: 10, borderRadius: "5px", backgroundColor: current >= goal ? "green" : "primary" }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif', marginTop: '5px' }}>
            {current >= goal ? `Amazing: $${current} of $${goal} | (${parseInt(current/goal*100)}%)` : `Current: $${current} of $${goal} | (${parseInt(current/goal*100)}%)`}
            </Typography>
          </CardContent>
        
        <CardActions>
          <Button size="medium" sx={{ fontFamily: 'Poppins, sans-serif', color: "#0E8388"}} onClick={() => setPopupOpen(true)}>
            Donate
          </Button>
          <Popup
  open={isPopupOpen}
  onClose={() => setPopupOpen(false)}
  modal
  closeOnDocumentClick
  contentStyle={{
    background: 'linear-gradient(135deg, #58C2F1, #0E8388)',
    border: '2px solid #0E8388',
    borderRadius: '20px',
    padding: '20px',
    maxWidth: '400px',
    width: '80%',
    textAlign: 'center',
    color: 'white',
  }}
>
  <div className="relative">
    <img
      src="../src/assets/close.png"
      alt="Close"
      height={30}
      width={30}
      className="custom-close-button absolute top-0 right-0 cursor-pointer"
      onClick={() => setPopupOpen(false)}
    />
    <p className="text-black mb-2" style={{ color: 'black', fontSize: '20px', fontWeight: "bold" }}>
      Please enter your contribution:
    </p>
    <TextField
      label="Donation Amount"
      variant="outlined"
      type="number"
      value={donationAmount}
      onChange={(e) => setDonationAmount(e.target.value)}
      sx={{ marginBottom: '10px', marginTop: '10px' }}
      inputProps={{
        step: 'any',
      }}
      style={{ width: '100%', background: 'lightgrey', borderRadius: '10px' }}
    />
    <p className="text-black" style={{ fontSize: '16px', margin: '10px 0', fontWeight: "bold" }}>
      {current >= goal
        ? `Amount Exceeding Goal: $${remainingAmount}`
        : `Amount Left Till Goal: $${remainingAmount}`}
    </p>
    <Button
      variant="contained"
      onClick={handleDonation}
      sx={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: 'lightgrey',
        color: 'darkgreen',
        width: '40%',
        padding: '10px',
        fontSize: '18px',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: 'white',
        },
      }}
      className="custom-close-button absolute cursor-pointer donate-button top-2 right-0"
    >
      Donate
    </Button>
    {isInvalidAmount && (
      <p style={{ color: 'red', fontSize: '16px', marginTop: '10px', fontWeight: 'bold' }}>
        Please enter a valid donation amount.
      </p>
    )}
    </div>
  </Popup>

  {showSharePopup && (
  <Popup
    open={showSharePopup}
    onClose={() => setShowSharePopup(false)}
    modal
    closeOnDocumentClick
    contentStyle={{
      background: 'linear-gradient(135deg, #58C2F1, #0E8388, #58C2F1)',
      border: '2px solid #0E8388',
      borderRadius: '20px',
      padding: '20px',
      maxWidth: '400px',
      width: '80%',
      textAlign: 'center',
      color: 'white',
    }}
  >
    <div className="relative">
      
      <Typography variant="h6" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
        Share your donation with others
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif', marginTop: '10px', color: "white" }}>
        Thank you for donating to<br/><span style={{ color: "lightorange", fontFamily: "Poppins, sans-serif" }}>{name}</span>.<br/> Share your donation using the link below:
      </Typography>
      <div className="share-link-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <a href={shareLink} target="_blank" rel="noopener noreferrer" className="share-link text-blue-700 font-bold bg-blue-200 pl-2 pr-2 rounded-full">
          Share Link
        </a>
        <img
          src="../src/assets/copy.png"
          alt="Copy"
          height={30}
          width={30}
          className="cursor-pointer bg-gray-200 p-1 rounded"
          onClick={copyToClipboard}
          style={{ marginLeft: '10px' }}
        />
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