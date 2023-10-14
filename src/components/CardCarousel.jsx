import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styles } from '../styles'
import { CharityCard } from '.';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../HOC';
import Search from './Search';
const CardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const cardComponents = [
    <CharityCard key="1" />,
    <CharityCard key="2" />,
    <CharityCard key="3" />,
    <CharityCard key="4" />
  ];

  return (
    <motion.div variants={textVariant()}>
      <section id="charities">
        <p className={styles.mainSectionTitleText + ' border-b-2 border-black pb-2 mb-10'}>Charities</p>
        <Search />

        <p className={styles.subSectionSubText + ' mt-10'}>Popular</p>
        <div className="my-carousel-bg rounded-3xl p-5 my-5">        
        <Carousel responsive={responsive} className='mt-[-20]'>
          { cardComponents }
        </Carousel>
        </div>

        <p className={styles.subSectionSubText + 'mt-5'}>New</p>
        <div className="my-carousel-bg rounded-3xl p-5 my-5">        
        <Carousel responsive={responsive}>
          { cardComponents }
        </Carousel>
        </div>

        <p className={styles.subSectionSubText + 'mt-5'}>Diversity</p>
        <div className="my-carousel-bg rounded-3xl p-5 my-5">        
        <Carousel responsive={responsive}>
          { cardComponents }
        </Carousel>
        </div>


      </section>
      </motion.div>
  )
}

export default SectionWrapper(CardCarousel, "")
