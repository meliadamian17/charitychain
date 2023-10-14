import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';
import { CharityCard } from '.';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../HOC';
import Search from './Search';
import { styles } from '../styles';
import MultiActionAreaCard from './CharityCard';

const CardCarousel = () => {
  const [charityData, setCharityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [charities, setCharities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharities = charities.filter(charity => 
    charity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const query = ref(db, 'Charities'); // Update this path according to your Firebase structure
      onValue(query, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const charities = Object.values(data);
          setCharityData(charities);
          const charityArray = [];
          for (let id in data) {
            charityArray.push({ id, ...data[id] });
          }
          setCharities(charityArray);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const cardComponents = charityData.map((charity, index) => (
    <CharityCard key={index} charity={charity} />
  ));

  const cardComponents2 = filteredCharities.map((charity, index) => (
    <CharityCard key={index} charity={charity} />
  ));


  return (
    <motion.div variants={textVariant()}>
      <section id="charities">
        <p className={styles.mainSectionTitleText + ' border-b-2 border-black pb-2 mb-10'}>
          Charities
        </p>
        
        <Search onSearchChange={setSearchTerm} />
        <p className={styles.subSectionSubText + ' mt-10'}>Popular</p>
        <div className="my-carousel-bg rounded-3xl p-5 my-5">
          
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Carousel responsive={responsive} infinite={true} className="mt-[-20]">
              {cardComponents}
            </Carousel>
          )}
          {/* {filteredCharities.map(charity => 
        <MultiActionAreaCard key={charity.id} charity={charity} />
      )} */}

        </div>

        {/* Add similar sections for "New" and "Diversity" here if needed */}
      </section>
    </motion.div>
  );
};

export default SectionWrapper(CardCarousel, '');

