import { BrowserRouter, Routes, Route } from "react-router-dom";
import {productInputs} from './formSource.js';
import {userInputs} from './formSource.js';
import "./App.css";
import { useState } from "react";
import New from "./pages/New/New.jsx";
import Single from "./pages/Single/Single.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import List from "./pages/List/List.jsx";
import { useContext } from "react";
import './style/dark.scss';
import { DarkModeContext } from "./context/darkModeContext.js";
function App(){

const {darkMode}= useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" :"app"}> 
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />}  />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
               title="Add New User" 
               index element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs}  title="Add New products"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
