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
import Health1 from '../assets/Health1.png';
import Health2 from '../assets/Health2.png';
import Health3 from '../assets/Health3.png';
import Nature1 from '../assets/Nature1.png';
import Nature2 from '../assets/Nature2.png';
import Nature3 from '../assets/Nature3.png';
import { styles } from '../styles'
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { db } from '../firebase';
import { getDatabase, ref, get } from "firebase/database";


// const badges = [
//     {
//         id: 1,
//         name: 'BLM1',
//         image: BLM1,
//     },
//     {
//         id: 2,
//         name: 'BLM2',
//         image: BLM2,
//     },
//     {
//         id: 3,
//         name: 'BLM3',
//         image: BLM3,
//     },
//     {
//         id: 4,
//         name: 'LGBTQ1',
//         image: LGBTQ1,
//     },
//     {
//         id: 5,
//         name: 'LGBTQ2',
//         image: LGBTQ2,
//     },
//     {
//         id: 6,
//         name: 'LGBTQ3',
//         image: LGBTQ3,
//     },
//     {
//         id: 7,
//         name: 'Native1',
//         image: Native1,
//     },
//     {
//         id: 8,
//         name: 'Native2',
//         image: Native2,
//     },
//     {
//         id: 9,
//         name: 'Native3',
//         image: Native3,
//     },
//     {
//         id: 10,
//         name: 'Ukraine1',
//         image: Ukraine1,
//     },
//     {
//         id: 11,
//         name: 'Ukraine2',
//         image: Ukraine2,
//     },
//     {
//         id: 12,
//         name: 'Ukraine3',
//         image: Ukraine3,
//     }
// ];

const Badges = () => {

    const tier1 = 10;
    const tier2 = 100;
    const tier3 = 500;

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    let uid = "";
    const [badgesToShow, setBadgesToShow] = useState([]);
    const [donations, setDonations] = useState([]);



    useEffect(() => {
        if (currentUser) {
        uid = currentUser.uid;
        if(uid){
            const userRef = ref(db, `Users/${currentUser.uid}/Donations`);
            console.log("UID", uid);

        // Using 'get' function to fetch the data
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const donationData = snapshot.val();
                console.log("Donation data: ", donationData);

                console.log("SocialBLM", donationData['Social (BLM)']);

                const earnedBadges = [];


                if (donationData['Social (BLM)'] <= tier1) {
                    earnedBadges.push(BLM1);
                } else if (donationData['Social (BLM)'] <= tier2) {
                    earnedBadges.push(BLM2);
                } else if (donationData['Social (BLM)'] <= tier3) {
                    earnedBadges.push(BLM3);
                }
                if (donationData['Social (Indigenous)'] <= tier1) {
                    earnedBadges.push(Native1);
                } else if (donationData['Social (Indigenous)'] <= tier2) {
                    earnedBadges.push(Native2);
                } else if (donationData['Social (Indigenous)'] <= tier3) {
                    earnedBadges.push(Native3);
                }
                if (donationData['Nature'] <= tier1) {
                    earnedBadges.push(Nature1);
                } else if (donationData['Nature'] <= tier2) {
                    earnedBadges.push(Nature2);
                } else if (donationData['Nature'] <= tier3) {
                    earnedBadges.push(Nature3);
                }
                if (donationData['Health'] <= tier1) {
                    earnedBadges.push(Health1);
                } else if (donationData['Health'] <= tier2) {
                    earnedBadges.push(Health2);
                } else if (donationData['Health'] <= tier3) {
                    earnedBadges.push(Health3);
                }
                if (donationData['LGBTQ+'] <= tier1) {
                    earnedBadges.push(LGBTQ1);
                } else if (donationData['LGBTQ+'] <= tier2) {
                    earnedBadges.push(LGBTQ2);
                } else if (donationData['LGBTQ+'] <= tier3) {
                    earnedBadges.push(LGBTQ3);
                }
                if (donationData['Peace'] <= tier1) {
                    earnedBadges.push(Ukraine1);
                } else if (donationData['Peace'] <= tier2) {
                    earnedBadges.push(Ukraine2);
                } else if (donationData['Peace'] <= tier3) {
                    earnedBadges.push(Ukraine3);
                }

                console.log("Badges to show: ", earnedBadges);

                setBadgesToShow(earnedBadges);
            }
        }).catch((error) => {
            console.error("Error fetching user donations: ", error);
        });

        }
    }

    }, [currentUser]);

    const badges = currentUser != null ? badgesToShow.map((badgeImg, index) => (
        <motion.div 
        variants={fadeIn("right","spring",0.2 * index, 0.75)}
        >
        <div key={index} className='m-2'>
            <img height={90} width={90} src={badgeImg} alt="badge" />
        </div>
        </motion.div>
    )) : <p className={`${styles.mainSectionSubText}`}> Sign In to Earn Badges!</p>;

    return (
        <motion.div variants={textVariant()}>
            <section id="badges"className='flex flex-col items-center'>
                <p className={styles.mainSectionTitleText + ' border-b-2 border-black pb-2'}>Your Stats</p>
                
                <div className='flex justify-center mt-10'>
                    <>{badges} </>
                </div>
                

            </section>
        </motion.div>
    );
};

export default SectionWrapper(Badges, "")