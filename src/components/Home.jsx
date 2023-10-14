import { styles } from "../styles";
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";

import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
    Charity_Chain_logo,
    Charity_Chain_logo,
    Charity_Chain_logo,
    Charity_Chain_logo

];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

const Home = () => {

    return (

        <motion.div variants={textVariant()}>
                <section id="home" className="aboutDescription">
                    <div className="aboutDes">
                    <div className={styles.mainSectionTitleText}>
                            Who Are We?
                    </div>
                    <div className={styles.mainSectionSubText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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