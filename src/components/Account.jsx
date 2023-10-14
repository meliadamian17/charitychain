import React from 'react';
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import "../index.css";
import test from "../assets/BLM1.png"
import { SectionWrapper } from '../HOC';
import Badges from './Badges'
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';
import { AuthContext } from '../contexts/AuthContext';

const Account = () => {
  const { currentUser } = useContext(AuthContext);  
  useEffect(() => {
  let uid = "";
  let name = "";
  console.log("Account page");
  if (currentUser) {
    uid = currentUser.uid;
    if(uid){
        const userRef = ref(db, `Users/${currentUser.uid}`);
        console.log("UID", uid);
  
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const user = userData[uid];
          name = user.Name;
        }
    })
    }
  } 
}, [currentUser]);
  return (
    <div className='my-main-bg h-[100vh] pt-[111px]'> 
        
          <div className="flex items-center justify-start">
            <h1 className="text-4xl font-bold text-dark-olive">Welcome User</h1>
          </div>
          <div className="flex items-center justify-start">
            <h1 className="text-4xl font-bold text-dark-olive">Amount Donated</h1>

            
          </div>
          <div className="flex items-center justify-start">
            <h1 className="text-4xl font-bold text-dark-olive">Badges</h1>
            <Badges />
          </div>
          
    </div>
  );
}

export default SectionWrapper(Account, "");