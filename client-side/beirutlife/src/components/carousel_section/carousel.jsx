import React from 'react'
import './carousel.css'
import OwlCarousel from 'react-owl-carousel';
import IMg1 from '../../assets/img01.jpg'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselComponent = () => {
  return (
    <OwlCarousel className='owl-theme' loop margin={10} autoPlay nav>
    <div className='item'>
        <img src={IMg1} alt='1st capture'/>
        <h1>1st image</h1>
    </div>
    <div className='item'>
        <img src={IMg1} alt='2nd capture'/>
        <h1>2nd image</h1>
    </div>
    <div className='item'>
        <img src={IMg1} alt='1st capture'/>
        <h1>3rd image</h1>
    </div>
    <div className='item'>
        <img src={IMg1} alt='2nd capture'/>
        <h1>4th image</h1>
    </div>
</OwlCarousel>
  )
}

export default CarouselComponent