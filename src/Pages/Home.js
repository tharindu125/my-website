import React from 'react'
import { About } from '../Components/About'
import { Contact } from '../Components/Contact'
import { Certifications } from '../Components/Certifications'

export const Home = () => {
  return (
    <div className='container'>

        <div className='main'>

            <div >
                <div className='details'>
                    <span className='details-h1'>Hello, Everyone</span>
                    <span className='details-h2'>I'm</span><br/>
                </div>
                <div className='details01'>
                    <span className='details-h3'><strong>Tharindu</strong> Ranaweera</span><br/>
                    <span className='details-h4'>and Also, <strong>Full-Stack developer</strong></span>
                </div>
                <hr className='details02'/>
                <p className='details-h5'>Hi, I'm Tharindu Ranaweera, a self-motivated and hard working Who is passonaate about software engineer.completed information technology diploma at Moratuwa University's Institute of Technology (NDT).</p>  

                <div className='details03'>

                    <a href='https://github.com/tharindu125'>
                        <img src='facebook.png' alt=''  />
                    </a>
                    <a href='https://www.linkedin.com/in/tharindu-ranaweera-748a01250/'>
                        <img src='linkedln.png' alt='' />
                    </a>
                    <a href='https://github.com/tharindu125'>
                        <img src='whatsapp.png' alt='' />
                    </a>
                    <a href='https://github.com/tharindu125'>
                        <img src='github.png' alt='' />
                    </a>
                    <a href='https://github.com/tharindu125'>
                        <img src='instergram.png' alt='' />
                    </a>
                    
                </div>        
            </div>

            <div className='image01'>
                <img src='my01.jpeg' alt=''className='home-img'/>
                <img src='https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif' alt='' className='home-gif'/>
            </div>  

        </div>

        <About/>
        <Certifications/>
        <Contact/>
        
    </div>
  )
}
