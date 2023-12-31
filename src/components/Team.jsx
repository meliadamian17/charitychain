import { styles } from "../styles";
import Team_Logo from "../assets/Team.jpg";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Team = () => {

    return (
        <motion.div variants={textVariant()} className="mb-10">
        <div className="aboutDescription">
            <div className="aboutImage" style={{ marginTop: "5%" }} id="teamImg">
                <img src={Team_Logo}/>
            </div>
            <div className="aboutDes">
            <div className={styles.mainSectionTitleText}>
                    Meet Our Team
            </div>
            <div className={styles.mainSectionSubText} style={{ backgroundColor: 'rgba(223,223,223,0.6)', opacity: "0.8", padding: '5%', borderRadius: '10px', color: "#2E4F4F" }}>
                Meet Chris, Damian, Krit and Brandan, the team behind CharityChain. They are a group of tech entrepreneurs looking to capitalize on the sense of community great software can foster. In a world where many may feel disconnected despite being closer than we’ve ever been as a species, they believe that paying forward the goodwill of one’s deeds  will help keep us more connected than ever.
            </div>
            </div>
        </div>
        </motion.div>
    );
};

export default SectionWrapper(Team, "");