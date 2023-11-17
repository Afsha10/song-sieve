import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import HeaderLogin from "./components/HeaderLogin";
import { useState } from "react";
function App() {
  const [chooseHeader, setChooseHeader] = useState(false)
  console.log(chooseHeader)
  
  return (
    <div className="flex flex-col min-h-screen">
      {chooseHeader ? <Header/> : <HeaderLogin setChooseHeader={setChooseHeader}/>}
        <RouterProvider
          router={AppRouter}
          fallbackElement={<p>Loading...</p>}
        />
    </div>
  );
}

export default App;
