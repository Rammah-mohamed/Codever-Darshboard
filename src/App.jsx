import './App.scss';
import './Dark.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import List from "./pages/List/List"
import New from "./pages/New/New"
import Single from "./pages/Single/Single"
import {formInputs, productsInputs} from "./formData"
import { useState } from 'react';

function App() {
  const[darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home setDarkMode={setDarkMode} darkMode={darkMode}/>}/>
            <Route index element={<Login/>}/>
            <Route path="users">
              <Route index element={<List darkMode={darkMode} setDarkMode={setDarkMode} title={"Add New User"} component={"user"}/>}/>
              <Route path=":userId" element={<Single darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
              <Route path="new" element={<New darkMode={darkMode} setDarkMode={setDarkMode} inputs={formInputs} title={"Add New Users"}/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List darkMode={darkMode} title={"Add New Product"} component={"product"}/>}/>
              <Route path=":productId" element={<Single darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
              <Route path="new" element={<New darkMode={darkMode} setDarkMode={setDarkMode} inputs={productsInputs} title={"Add New Products"}/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
