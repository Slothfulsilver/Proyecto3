import React from 'react'
import './main.css'
import img from '../../Media/image(1).jpg'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'Cultural Relax',
    fees: '$700',
    description: "Efe"
  },
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'Cultural Relax',
    fees: '$700',
    description: "Efe"
  }
]

export const Main = () => {
  return (
    <section className='main controller sections'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>

        {Data.map(({id, imgSrc ,destTitle, location, grade, fees, description}) => {
          return (
              <div key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span> 
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
          )
        })}

      </div>
    </section>
  )
}

export default Main