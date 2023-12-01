import Header from "../Header";
import CyfRecommendation from "../CyfRecommendation";

const ReccommendationScreen = () => {
  return (
    <div>
      <Header />
      <h2 style={{ color: "white" }}>CodeYourFuture Recommendations</h2>
      
      <CyfRecommendation />
    </div>
  );
};

export default ReccommendationScreen;
