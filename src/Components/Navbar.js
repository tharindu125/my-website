import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import navbar from '../images/navbar.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  return (
    <div className='navbar-main'>
        <nav className='navbar'>

            <h1 className='navbar-name'>Tharindu Ranaweera</h1>
            <img src={navbar} alt='' className='navbar-img'/>

            <div>
                <div class="navbar-header">
                    <button class="navbar-toggle" onClick={handleToggle}>
                        <span class="toggle-icon"></span>
                        <span class="toggle-icon"></span>
                        <span class="toggle-icon"></span>
                        <span class="toggle-icon"></span>
                    </button>
                </div>
                <ul className={`navbar-ul ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="/" className='navbar-element'>Home</Link>
                    <Link to="/About" className='navbar-element'>About</Link>
                    <Link to="/Certifications" className='navbar-element'>Certification & Awardes</Link>
                    <Link to="/Contact" className='navbar-element'>Contact</Link>
                </ul>
            </div>
            

            <div>
                <a href='https://drive.google.com/file/d/1_40rEXQ9n5xHsRfNNkvdXhjvcObdbKIH/view?usp=share_link'>
                    <button className='navbar-button'>Download CV</button>
                </a>
                
            </div>
        </nav>
    </div>
    
  );
};

export default Navbar;
