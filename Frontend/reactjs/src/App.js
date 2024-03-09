import './App.css';
import CleanHome from './components/screens/CleanHome'
import Login from './components/screens/Login';
import Courses from './components/screens/Courses';
import SignUp from './components/screens/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CleanHome />}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
