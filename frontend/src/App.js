import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" flex flex-col bg-black min-h-screen">
      
      {/* RouterProvider below is the main content */}
      <RouterProvider
        className="grow"
        router={AppRouter}
        fallbackElement={<p>Loading...</p>}
      />
      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
