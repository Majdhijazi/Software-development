import React from 'react'
import IntroComponent from '../../components/intro_section/intro'
import AboutComponent from '../../components/about_section/about'
import CarouselComponent from '../../components/carousel_section/carousel'

const Home = () => {
  return (
    <div>
        <IntroComponent title={'Beirut Life'} pic={"section-intro"}/>
        <AboutComponent/>
        <CarouselComponent/>
    </div>
  )
}

export default Home