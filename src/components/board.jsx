import React, { useState } from 'react'
import Profiles from './profiles';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';

let Leaderboard = [];

const fetchData = async () => {
  const usersRef = ref(db, 'Users');
  onValue(usersRef, (snapshot) => {
    const userData = snapshot.val();
    if (userData) {
      Leaderboard = Object.keys(userData).map((userId) => {
        const user = userData[userId];
        return {
          name: user.Name.replace('Name: ', ''),
          total: user.Total,
          img: user.img,
        };
      });
    }
  });
}

fetchData();


const Board = () => {
  return (
    <motion.div variants={textVariant()}>
    
      <section className='flex flex-col items-center'>
        <div className="board">
          <div className={`${styles.mainSectionTitleText} + 'leaderboard border-b-2 border-black pb-2'`}>Leaderboard</div>
          <Profiles Leaderboard={sort(Leaderboard)}></Profiles>
        </div>
      </section>
    </motion.div>
  )
}

function sort(data){
  return data.sort((a, b) => {
      if ( a.score === b.score){
          return b.score - a.score;
      } else{
          return b.score - a.score;
      }
  })

}

export default SectionWrapper(Board, "");
