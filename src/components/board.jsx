import React, { useState, useEffect } from 'react';
import Profiles from './profiles';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';

const Board = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRef = ref(db, 'Users');
      onValue(usersRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          const newLeaderboard = Object.keys(userData).map((userId) => {
            const user = userData[userId];
            return {
              name: user.Name.replace('Name: ', ''),
              total: user.Total,
              img: user.img,
            };
          });
          // Sort the new leaderboard data
          newLeaderboard.sort((a, b) => b.total - a.total);
          // Set the leaderboard state with the new data
          setLeaderboard(newLeaderboard);
        }
      });
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <motion.div variants={textVariant()}>
      <section className='flex flex-col items-center'>
        <div className="board">
          <div className={`${styles.mainSectionTitleText} + 'leaderboard border-b-2 border-black pb-2'`}>
            Leaderboard
          </div>
          <Profiles Leaderboard={leaderboard}></Profiles>
        </div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(Board, "");