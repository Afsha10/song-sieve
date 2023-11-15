import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=" text-3xl font-bold ">Hello World!!! </h1>
        <RouterProvider
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
      </header>
    </div>
  );
}

export default App;
