import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

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
