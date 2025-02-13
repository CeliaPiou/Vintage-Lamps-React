import React from 'react'

const Footer = () => {

  return (

    <footer className='w-100'>

      <section id="pre-footer" className='w-80 flex justify-space-between'>

        <div className='flex column'>
          <img src="https://i.ibb.co/9mRfWCLB/ic-outline-paypal.png" alt="paypal"></img>
          <h2>Securised payments</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/fz0TTwV1/pajamas-nature.png" alt="nature"></img>
          <h2>Circular economy</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/Wp4Qk3Jd/ep-phone.png" alt="phone"></img>
          <h2>Available 7/7</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/ccJmjB7R/bi-truck.png" alt="truck"></img>
          <h2>Worldwide deliveries</h2>
        </div>

      </section>

      <section id="main-footer"></section>

    </footer>
  )
}

export default Footer