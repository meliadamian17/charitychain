import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styles } from '../styles'
import { CharityCard } from '.';

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
    <section>
      <p className={styles.mainSectionTitleText + ' border-b-2 border-black pb-2'}>Charities</p>
      <Carousel responsive={responsive} className='mt-10'>
        { cardComponents }
      </Carousel>
      <Carousel responsive={responsive} className='mt-10'>
        { cardComponents }
      </Carousel>
      <Carousel responsive={responsive} className='mt-10'>
        { cardComponents }
      </Carousel>
    </section>
  )
}

export default CardCarousel
