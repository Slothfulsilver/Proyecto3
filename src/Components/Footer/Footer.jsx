import React from 'react'
import './footer.css'
import video1 from '../../Media/video(1).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'

export const Footer = () => {
  return (
    <section className='footer'>
      
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted type = 'video/mp4'>*</video>
      </div>
    

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type = 'text' placeholder = 'Enter e-mail adress'/>
            <button className='btn flex' type='submit'>
              Send <FiSend className='icon'/>
            </button>

          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'> <MdOutlineTravelExplore className = 'icon'/> Travel.</a>
            </div>

            <div className='footerText'>
              <p>Made by Arturo Garcia. </p><p>Guide link <a href='https://www.youtube.com/watch?v=309beMyhXtg&t=1s'>here</a>  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer