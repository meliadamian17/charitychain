import React from 'react';
import TempBadge from '../assets/temp_badge.png'
import { styles } from '../styles'
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const badges = [
    {
        id: 1,
        name: 'Bronze',
        image: TempBadge,
    },
    {
        id: 2,
        name: 'Silver',
        image: TempBadge,
    },
    {
        id: 3,
        name: 'Gold',
        image: TempBadge,
    },
];

const Badges = () => {
    return (
        <motion.div variants={textVariant()}>
            <section id="badges"className='flex flex-col items-center'>
                <p className={styles.mainSectionTitleText + ' border-b-2 border-black pb-2'}>Your Badges</p>
                <div className='flex justify-center mt-10'>
                {badges.map((badge) => (
                    <div key={badge.id} className='m-2'>
                        <img height={90} width={90} src={badge.image} alt={badge.name} />
                    </div>
                ))}
                </div>
            </section>
        </motion.div>
    );
};

export default SectionWrapper(Badges, "")
