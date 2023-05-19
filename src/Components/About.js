import React from 'react'
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

export const About = () => {
  return (
    <>
        <div className='about-main'>

            <div className='about-img'>
                <img src='about.jpeg' alt='' className='img'/>
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

        
    </>
  )
}
