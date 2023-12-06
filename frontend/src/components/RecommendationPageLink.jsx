import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecommendationPageLink = () => {
  return (
    <div>
      <Link to="/app/recommendation">
      <motion.div 
        animate={{rotate:[0,360],scale:1}}
        transition={{ duration:2}}
        initial={{scale:0}}
        className="cyf_logo">
          <img
            className="cyfImg"
            src="https://avatars.githubusercontent.com/u/22743767?s=280&v=4"
            alt="code your future logo"
          ></img>
          <p>Recommendation</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default RecommendationPageLink;
