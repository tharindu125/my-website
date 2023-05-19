import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-main'>

        <div className='contact'>
            <h1> GeT In Touch</h1>
        </div>

        <div className='contact-img'>
            <img src='https://media.giphy.com/media/wLNuW1tCKRiPmDV5Y4/giphy.gif' alt=''/>
        </div>

        <div className='contact-body'>

            <div className='about01'>
                <div className='contact-span'>
                    <span><strong>Name : </strong></span><span> Tharindu Nawanjana Ranaweera</span>
                </div>
                <div className='contact-span'>
                    <span><strong>Address : </strong></span><span> Matara, Southern province, Sri Lanka</span>
                </div>
                <div className='contact-span'>
                    <span><strong>Mobile Number : </strong></span><span> +94 766 008863 / +94 70 272 7575</span>
                </div>
                <div className='contact-span'>
                    <span><strong>E-mail : </strong></span><span>nawanjanaenda@gmail.com</span>
                </div>
            </div>
            <div className='contact02'>

                <a href='https://github.com/tharindu125'>
                    <img src='facebook.png' alt='' />
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

        <div className='footer'>
            <span>Desighn & Created by </span><span> Tharindu Ranaweera</span>
        </div>

    </div>
  )
}
