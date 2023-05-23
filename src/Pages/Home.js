import React, {useEffect} from 'react';

/*About page*/
import html from '../images/html.png'
import css from '../images/CSS.png'
import boostrap from '../images/boostrap.png'
import express from '../images/express.png'
import javasript from '../images/javasript.png'
import node from '../images/node.png'
import react from '../images/React.png'
import mongo from '../images/mongo.png'
import tailwind from '../images/tailwind.png'
import mui from '../images/mui.png'
import mysql from '../images/mysql.png'
import java from '../images/java.png'
import python from '../images/python.png'
import gif from '../images/gif.gif'

/*Cerificates page*/
import certiprof from '../images/Cerificate/certiprof.png'
import hackerank from '../images/Cerificate/hackerank.png'
import simplilearn from '../images/Cerificate/simplilearn.png'
import sololearn from '../images/Cerificate/sololearn.png'
import uom from '../images/Cerificate/uom.png'


export const Home = () => {

    // const adContainer = document.querySelectorAll(".details-main") ;
    
    // function animatedAd(element) {
    //     for (element of element) {
    //         if (element.isIntersecting) {
    //             element.target.classList.add("animate");
    //         }
    //     }
    // }

    // const option = {}

    // const io = new IntersectionObserver(animatedAd, option);

    // io.observe(adContainer);

    useEffect(() => {
        const adContainer = document.querySelectorAll('.move, .image01, .about-img, .about-detail, .Certi-body, .contact01, .contact02');
    
        function animatedAd(entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
          });
        }
    
        const option = {
            threshold:0.8
        };
    
        const io = new IntersectionObserver(animatedAd, option);
    
        adContainer.forEach((element) => {
          io.observe(element);
        });
    
        return () => {
          adContainer.forEach((element) => {
            io.unobserve(element);
          });
        };
      }, []);

  return (
    <div className='container'>

        <div>

            {/* Home page */}
            <section id="home">
                 <div className='main'>

                    <div className='move'>
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

                            <a href='https://web.facebook.com/tharindu.ranaweera.503'>
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
                        <img src='profile.png' alt=''className='home-img'/>
                        <img src='https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif' alt='' className='home-gif'/>
                    </div>  

                </div>

            </section>

            {/* About page */}
            <section id="about">
                
                <div className='about-main'>

                    <div className='about-img'>
                        <img src='about.jpeg' alt='' className='about-img01'/>
                        <img src={gif} alt='' className='about-gif'/>
                    </div>

                    <div className='about-detail'>
                        <h1>About Me ,</h1>
                        <p className='about-parh'>Hi, I'm Tharindu Ranaweera, a self-motivated and hard working Who is passonaate about software engineer.completed information technology diploma at Moratuwa University's Institute of Technology (NDT). As a teenager, I began learning to code, and after passing my Advanced Level exams, I knew that software engineering was the right career path for me.</p>
                        <p className='about-parh'>Since then, I've gained experience through a variety of projects and involvement with notable startups, continuously improving my skills in Javascript, Node.js, React.js . I am always looking for ways to improve my skills and stay up to date on the latest technologies and industry trends.</p>
                        <p className='about-parh'>I'm always looking for new challenges and ways to grow, and I'm excited to connect and collaborate with like-minded people. Thank you for visiting my website.</p>

                        <hr className='about-hr'/>
                        <h2>Skills I have</h2>
                        <div className='about-image-icons'>
                            <img src={javasript} alt='' className='about-icons'/>
                            <img src={html} alt='' className='about-icons'/>
                            <img src={css} alt='' className='about-icons'/>
                            <img src={react} alt='' className='about-icons'/>
                            <img src={node} alt='' className='about-icons'/>
                            <img src={express} alt='' className='about-icons'/>
                            <img src={mongo} alt='' className='about-icons'/>
                            <img src={mysql} alt='' className='about-icons'/>
                            <img src={boostrap} alt='' className='about-icons'/>
                            <img src={tailwind} alt='' className='about-icons-tailwind'/>
                            <img src={mui} alt='' className='about-icons'/>
                            <img src={java} alt='' className='about-icons'/>
                            <img src={python} alt='' className='about-icons'/>
                            
                        </div>
                    </div>

                </div>

            </section>

            {/*Cerificates page*/}
            <section id="certifications">
                <div className='Certi-main'>
                    <h1>Certifications I have</h1>

                    <div className='Certi-body'>

                        <div className='Certi-img'>
                            <a href="/"><img src={uom} alt=''/></a>
                            <a href='/'><span>Certifications issued by University of Moratuwa</span></a>
                                        
                        </div>

                        <div className='Certi-img'>
                            <a href='/'><img src={hackerank} alt=''/></a>
                            <a href='/'><span>Certifications issued by HackerRank</span></a>
                        </div>

                        <div className='Certi-img'>
                            <a href='/'><img src={sololearn} alt=''/></a>
                            <a href='/'><span>Certifications issued by Sololearn</span></a>
                        </div>

                        <div className='Certi-img'>
                            <a href='/'><img src={certiprof} alt=''/></a>
                            <a href='/'><span>Certifications issued by CertiProf</span></a>
                        </div>

                        <div className='Certi-img'>
                            <a href='/'><img src={simplilearn} alt=''/></a>
                            <a href='/'><span>Certifications issued by simplilearn</span></a>
                        </div>

                    </div>

                </div>
            </section>

            {/* Contact page */}
            <section id="contact">
                <div className='contact-main'>

                    <div className='contact'>
                        <h1> GeT In Touch</h1>
                    </div>

                    <div className='contact-img'>
                        <img src='https://media.giphy.com/media/wLNuW1tCKRiPmDV5Y4/giphy.gif' alt=''/>
                    </div>

                    <div className='contact-body'>

                        <div className='contact01'>
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

                            <a href='https://web.facebook.com/tharindu.ranaweera.503'>
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
            </section>

        </div>
        
    </div>

  )
}

export default Home;