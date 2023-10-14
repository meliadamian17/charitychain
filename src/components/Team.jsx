import { styles } from "../styles";
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Team = () => {

    return (
        <motion.div variants={textVariant()}>
        <div className="aboutDescription">
            <div className="aboutDes">
            <div className={styles.mainSectionTitleText}>
                    Meet Our Team
            </div>
            <div className={styles.mainSectionSubText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            </div>
            <div className="aboutImage">
                <img src={Charity_Chain_logo}/>
            </div>
        </div>
        </motion.div>
    );
};

export default SectionWrapper(Team, "");