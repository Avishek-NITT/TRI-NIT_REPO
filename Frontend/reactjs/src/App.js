import './App.css';
import Home from './components/screens/Home'
import Login from './components/screens/Login';
import Courses from './components/screens/Courses';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
