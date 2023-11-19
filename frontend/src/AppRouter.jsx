import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import LoginScreen from "./components/screens/LoginScreen";
import MainScreen from "./components/screens/MainScreen";

// Configure nested routes with JSX

let AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/app" element={<MainScreen />} />
      
    </>
  )
);

export default AppRouter;
