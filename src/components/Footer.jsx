import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex items-center py-0.5 bottom-0 z-20 my-bg-primary`}>
      <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-white text-[12px] font-medium cursor-pointer flex p-2">
            CharityChain | © 2023
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
