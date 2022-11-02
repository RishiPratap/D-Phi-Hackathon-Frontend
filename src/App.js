import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Container from './components/container/container';
import AddProject from './components/createprojects/create_project';
import ProjectInfo from './components/projectinfo/projectinfo';
import ProjectEdits from './components/projectedit/projectedit';

function App(){
    return(
        <Router>
        <Navbar/>
            <Routes>
            <Route path="/" element={<Container />}>
            </Route>
            <Route path="/project" element={<AddProject />}>
            </Route>
            <Route path="/projectinfo" element={<ProjectInfo />}>
            </Route>
            <Route path="/projectedit" element={<ProjectEdits />}>
            </Route>
            </Routes>
        </Router>
    )
}

export default App;