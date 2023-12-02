import React from 'react'
import './intro.css'

const IntroComponent = ({title, pic}) => {
  return (
    <section className={pic}>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="link-to-book-wrapper">
        <a className="link-to-book" href="#reservations">Book a table</a>
      </div>
    </section>
  )
}

export default IntroComponent