import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import LoginScreen from "./components/screens/LoginScreen";
import MainScreen from "./components/screens/MainScreen";
import PlaylistTracksScreen from "./components/screens/PlaylistTracksScreen";
import FilteredTracksScreen from "./components/screens/FilteredTracksScreen";
import RecommendationScreen from "./components/screens/RecommendationScreen";

// Configure nested routes with JSX
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/app" element={<MainScreen />} />
      <Route path="/app/playlist" element={<PlaylistTracksScreen />} />
      <Route
        path="/app/playlist/:playlistId"
        element={<PlaylistTracksScreen />}
      />
      <Route path="/app/filteredPlaylist" element={<FilteredTracksScreen />} />
      <Route path="/app/recommendation" element={<RecommendationScreen />} />
    </>
  )
);

export default AppRouter;
