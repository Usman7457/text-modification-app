import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
 
   

    <Router>
       <Routes>
     
     
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextFrom heading="Text Here To Transform" />} />
        <Route path="/Contact" element={<TextFrom heading="Text Here To Transform" />} />
      
      
      </Routes>
    </Router> 
  );
}

export default App;
