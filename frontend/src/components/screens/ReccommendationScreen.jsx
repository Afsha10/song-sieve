import Header from "../Header";
import CyfFavPlaylist from "../CyfFavPlaylist";
import CyfRecommendation from "../CyfRecommendation";

const ReccommendationScreen = () => {
  return (
    <div>
      <Header />
      <CyfFavPlaylist />
      <h2 style={{ color: "white" }}>CodeYourFuture Recommendations</h2>
      
      <CyfRecommendation />
    </div>
  );
};

export default ReccommendationScreen;
