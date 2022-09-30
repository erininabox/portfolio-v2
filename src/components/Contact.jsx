import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className='contact'>
        <p className='contact-greeting'>Reach out to me!</p>
        <p className='contact-text'>Your best bet for reaching me is to send me an email or find me on LinkedIn.</p>
        <Button text="Email me" link="mailto:erinhalden@erininabox.com" />
        <div className="contact__links">
          <a href="https://www.linkedin.com/in/erininabox" aria-label='LinkedIn'>
            <i className="fa-brands fa-linkedin icon icon__footer"></i>
            </a>
          <a href="https://www.github.com/erininabox" aria-label='GitHub'>
            <i className="fa-brands fa-square-github icon icon__footer"></i>
            </a>
        </div>
    </div>
  )
}

export default Contact