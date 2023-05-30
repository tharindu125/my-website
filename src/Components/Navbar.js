import React, {useState} from 'react';
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
                    <a href="#home" className='navbar-element'>Home</a>
                    <a href="#about" className='navbar-element'>About</a>
                    <a href="#certifications" className='navbar-element'>Certification & Awardes</a>
                    <a href="#contact" className='navbar-element'>Contact</a>
                </ul>
            </div>
            

            <div>
                <a href='https://drive.google.com/file/d/1yebIqXAMwbpzPGqjIWEP23VZcM3mAmlC/view?usp=share_link'>
                    <button className='navbar-button'>Download CV</button>
                </a>
                
            </div>
        </nav>
    </div>
    
  );
};

export default Navbar;
