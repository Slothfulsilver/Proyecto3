import React from 'react'
import './search.css'
import img from '../../Media/image(1).jpg'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'

export const Search = () => {
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


    return (
        <section className='searchSect'>
            <div className='container flex'>
                <div className='filters'>
                    <ul className="navList flex">

                        <li className='navItem'>
                            <a href="#" className='navLink'>Home</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Shop</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>About</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Pages</a>
                        </li>

                        <button className='btn'>
                            <a href='#'>Book Now!</a>
                        </button>
                    </ul>
                </div>
                <div className='content grid'>
                    {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
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
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Search
