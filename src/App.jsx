import './App.css';
import './index.css';
// import ReactDOM  from 'react-dom';
// import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Profile/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </Router>
  );
}
export default App