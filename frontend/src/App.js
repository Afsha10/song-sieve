import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <div className=" flex flex-col bg-black min-h-screen">
        {/* RouterProvider below is the main content */}
        <RouterProvider
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
      </div>
      {/* <div className="footer"> */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
