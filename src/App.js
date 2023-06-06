import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Loan from './Component/Loan';
import Login from './Component/Login';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Loan' element={<Loan />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
