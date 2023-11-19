import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <RouterProvider 
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
    </div>
  );
}

export default App;
