import './Style/Navbar.css';
import './Style/Home.css';
import './Style/About.css';
import './Style/Contact.css';
import './Style/Certification.css'

import Home from './Pages/Home';
import Navbar from './Components/Navbar';



function App() {
  return (
    <> 
            <Navbar/>  
            <Home/>        
    </>
  );
}

export default App;
