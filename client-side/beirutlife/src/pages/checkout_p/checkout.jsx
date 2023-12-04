import React from 'react'
import './checkout.css'
import IntroComponent from '../../components/intro_section/intro'
import CheckoutComponent from '../../components/checkout_section/checkout'
import CheckoutForm from '../../components/checkout_form/checkoutForm'

const CheckOut = () => {
  return (
    <div className='page-container'>
        <IntroComponent title={'Almost There!'} pic={"checkout-section-intro"}/>
        <h4 className='note'>Click again on the plate to confirm the order!</h4>
        <CheckoutComponent/>
        <CheckoutForm/>
    </div>
  )
}

export default CheckOut