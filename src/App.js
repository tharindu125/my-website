import './Style/Navbar.css';
import './Style/Home.css';
import './Style/About.css';
import './Style/Contact.css';
import './Style/Certification.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Pages/Home';
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Certifications } from './Components/Certifications';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Certifications' element={<Certifications/>}/>
              <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
