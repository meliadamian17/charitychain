import { styles } from "../styles";
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import Car2 from "../assets/AboutCarousel2.png";
import Car3 from "../assets/AboutCarousel3.png";
import Car4 from "../assets/AboutCarousel4.png";

import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from 'typed.js';
import { useEffect, useRef, React, useState } from "react";

const Home = () => {

    const typedTextRef = useRef();

    const images = [
        Charity_Chain_logo,
        Car2,
        Car3,
        Car4
    ];

    const [sectionInViewport, setSectionInViewport] = useState(false);

    useEffect(() => {
        const options = {
          strings: ["CharityChain is a novel approach to charitable giving using e-transfer donations and a user-friendly platform. It turns e-transfer transactions into a means of creating a chain of generosity. It’s a unique way to spread generosity and raise awareness about various charitable causes while leveraging the convenience of e-transfers."],
          typeSpeed: 20,
          showCursor: true,
        };
      
        const typed = new Typed(typedTextRef.current, options);

        // const handleScroll = () => {
        //     const sectionPosition = typedTextRef.current.getBoundingClientRect();
        //     if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
        //         if (!sectionInViewport) {
        //             typed.reset();
        //             setSectionInViewport(true);
        //         }
        //     } else {
        //         if (sectionInViewport) {
        //             typed.destroy();
        //             setSectionInViewport(false);
        //         }
        //     }
        // };

        //window.addEventListener("scroll", handleScroll);

        return () => {
            typed.destroy();
            //window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionInViewport]);

      const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (

        <motion.div variants={textVariant()}>
                <section id="home" className="aboutDescription">
                    <div className="aboutDes">
                    <div className={styles.mainSectionTitleText}>
                            Who Are We?
                    </div>
                    <div className={styles.mainSectionSubText}>
                        <span ref={typedTextRef}></span>
                    </div>
                    </div>
                    <div className="aboutImage">
                    <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img} alt={`slide-${idx}`} />
                        </div>
                        ))}
                    </Slider>
                    </div>
                </section>
            </motion.div>
    );
};

export default SectionWrapper(Home, "");