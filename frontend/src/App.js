import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
        <RouterProvider
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
    </div>
  );
}

export default App;
