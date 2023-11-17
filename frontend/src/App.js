import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className=" flex flex-col bg-yellow-100 min-h-screen">
      <header className="App-header">
        <RouterProvider
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
      </header>
    </div>
  );
}

export default App;
