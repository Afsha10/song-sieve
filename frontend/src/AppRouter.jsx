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
import RecommendationScreen from "./components/screens/Recommendation";
import { CheckAuthentication } from "./components/CheckAuthenication";
import { CheckIfLoggedIn } from "./components/CheckIfLoggedIn";
import SetToken from "./components/screens/SetToken";

// Configure nested routes with JSX
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login"
        element={
          <CheckIfLoggedIn>
            <LoginScreen />
          </CheckIfLoggedIn>
        }
      />
      <Route
        path="/"
        element={
          <CheckAuthentication>
            <MainScreen />
          </CheckAuthentication>
        }
      />
      <Route path="/app" element={<SetToken />} />
      <Route
        path="/app/playlist"
        element={
          <CheckAuthentication>
            <PlaylistTracksScreen />
          </CheckAuthentication>
        }
      />
      <Route
        path="/app/playlist/:playlistId"
        element={
          <CheckAuthentication>
            <PlaylistTracksScreen />
          </CheckAuthentication>
        }
      />
      <Route
        path="/app/playlist"
        element={
          <CheckAuthentication>
            <PlaylistTracksScreen />
          </CheckAuthentication>
        }
      />
      <Route
        path="/app/filteredPlaylist"
        element={
          <CheckAuthentication>
            <FilteredTracksScreen />
          </CheckAuthentication>
        }
      />
      <Route
        path="/app/recommendation"
        element={
          <CheckAuthentication>
            <RecommendationScreen />
          </CheckAuthentication>
        }
      />
    </>
  )
);

export default AppRouter;
