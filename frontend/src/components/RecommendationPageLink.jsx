import { Link } from "react-router-dom";

const RecommendationPageLink = () => {
  return (
    <div>
      <Link to="/app/recommendation">
        <div className="cyf_logo">
          <img
            className="cyfImg"
            src="https://avatars.githubusercontent.com/u/22743767?s=280&v=4"
            alt="code your future logo"
          ></img>
          <p>Recommendation</p>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationPageLink;
