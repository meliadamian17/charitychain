import React from 'react';
import BLM1 from '../assets/BLM1.png';
import BLM2 from '../assets/BLM2.png';
import BLM3 from '../assets/BLM3.png';
import LGBTQ1 from '../assets/LGBTQ1.png';
import LGBTQ2 from '../assets/LGBTQ2.png';
import LGBTQ3 from '../assets/LGBTQ3.png';
import Native1 from '../assets/Native1.png';
import Native2 from '../assets/Native2.png';
import Native3 from '../assets/Native3.png';
import Ukraine1 from '../assets/Ukraine1.png';
import Ukraine2 from '../assets/Ukraine2.png';
import Ukraine3 from '../assets/Ukraine3.png';
import { styles } from '../styles'
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const badges = [
    {
        id: 1,
        name: 'BLM1',
        image: BLM1,
    },
    {
        id: 2,
        name: 'BLM2',
        image: BLM2,
    },
    {
        id: 3,
        name: 'BLM3',
        image: BLM3,
    },
    {
        id: 4,
        name: 'LGBTQ1',
        image: LGBTQ1,
    },
    {
        id: 5,
        name: 'LGBTQ2',
        image: LGBTQ2,
    },
    {
        id: 6,
        name: 'LGBTQ3',
        image: LGBTQ3,
    },
    {
        id: 7,
        name: 'Native1',
        image: Native1,
    },
    {
        id: 8,
        name: 'Native2',
        image: Native2,
    },
    {
        id: 9,
        name: 'Native3',
        image: Native3,
    },
    {
        id: 10,
        name: 'Ukraine1',
        image: Ukraine1,
    },
    {
        id: 11,
        name: 'Ukraine2',
        image: Ukraine2,
    },
    {
        id: 12,
        name: 'Ukraine3',
        image: Ukraine3,
    }
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