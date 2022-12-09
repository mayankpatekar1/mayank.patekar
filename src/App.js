import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState} from 'react';
import Home from './component/Home';
import Projects from "./component/Projects";
import Education from './component/Education';
import Skills from './component/Skills';
import './App.css';


function App() {
  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) => {
    settoggleState(index);
  }

  return (
    <Router>
      <div className="App">
      <ul className="nav-list">
        <li className={toggleState === 1 ? "active-tab" : ""} onClick={() =>toggleTab(1)}>
          <Link to="/" ><span className="nav-li" >Home</span></Link>
        </li>
        <li className={toggleState === 2 ? "active-tab" : ""} onClick={() =>toggleTab(2)}>
          <Link to="/education" ><span className="nav-li" >Education</span></Link>
        </li>
        <li className={toggleState === 3 ? "active-tab" : ""} onClick={() =>toggleTab(3)}>
          <Link to="/skills" ><span className="nav-li" >Skills</span></Link>
        </li>
        <li className={toggleState === 4 ? "active-tab" : ""} onClick={() =>toggleTab(4)}>
          <Link to="/projects" ><span className="nav-li" >Projects</span></Link>
        </li>
      </ul>
      <div className="main-content">

      
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/projects" element={<Projects />} ></Route>
        <Route exact path="/education" element={<Education />} ></Route>
        <Route exact path="/skills" element={<Skills />} ></Route>
      </Routes>
      </div>
      
      
      
      </div>
    </Router>
    
  );
}

export default App;
