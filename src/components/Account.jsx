import React from 'react';
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import "../index.css";
import test from "../assets/BLM1.png"
import { SectionWrapper } from '../HOC';
// import Community from './Community'
import Badges from './Badges'

const Account = () => {
    console.log("Account page");
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
          </div>
          
    </div>
  );
}

export default SectionWrapper(Account, "");