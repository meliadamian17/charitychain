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
            Meet Chris, Damian, Krit and Brandan, the team behind CharityChain. They are a group of Computer Science and Machine Learning students looking to capitalize on the sense of community great software can foster. In a world where many may feel disconnected despite being closer than we’ve ever been as a species, they believe that paying forward the goodwill of one’s deeds  will help keep us more connected than ever.
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