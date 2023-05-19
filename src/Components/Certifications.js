import React from 'react'
import certiprof from '../images/Cerificate/certiprof.png'
import hackerank from '../images/Cerificate/hackerank.png'
import simplilearn from '../images/Cerificate/simplilearn.png'
import sololearn from '../images/Cerificate/sololearn.png'
import uom from '../images/Cerificate/uom.png'


export const Certifications = () => {
  return (
    <>
        <div className='Certi-main'>
          <h1>Certifications I have</h1>
            <div className='Certi-body'>

              <div className='Certi-img'>
                <a href=''><img src={uom} alt=''/></a>
                <a href=''><span>Certifications issued by University of Moratuwa</span></a>
                               
              </div>

              <div className='Certi-img'>
                  <a href=''><img src={hackerank} alt=''/></a>
                  <a href=''><span>Certifications issued by HackerRank</span></a>
              </div>

              <div className='Certi-img'>
                  <a href=''><img src={sololearn} alt=''/></a>
                  <a href=''><span>Certifications issued by Sololearn</span></a>
              </div>

              <div className='Certi-img'>
                  <a href=''><img src={certiprof} alt=''/></a>
                  <a href=''><span>Certifications issued by CertiProf</span></a>
              </div>

              <div className='Certi-img'>
                  <a href=''><img src={simplilearn} alt=''/></a>
                  <a href=''><span>Certifications issued by simplilearn</span></a>
              </div>

            </div>

        </div>
      
    </>
  )
}
