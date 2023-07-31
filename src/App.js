import React from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/:country' element={<Countries/>}/>
        <Route path='/:country/:country' element={<Country/>}/>
      </Routes>
    </div>
  )
}

export default App;
