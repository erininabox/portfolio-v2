import React from 'react'
import Button from '../components/Button'

const Contact = () => {
  return (
    <div className='contact'>
        <p className='contact-greeting'>Reach out to me!</p>
        <p className='contact-text'>Your best bet for reaching me is to send me an email or find me on LinkedIn.</p>
        <Button text="Email me" link="mailto:erinhalden@erininabox.com" />
    </div>
  )
}

export default Contact