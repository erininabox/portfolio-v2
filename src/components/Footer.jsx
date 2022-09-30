import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <Link href="https://www.linkedin.com/in/erininabox" aria-label='LinkedIn'>
          <i className="fa-brands fa-linkedin icon icon__footer"></i>
          </Link>
        <Link href="https://www.github.com/erininabox" aria-label='GitHub'>
          <i className="fa-brands fa-square-github icon icon__footer"></i>
          </Link>
        <Link href="mailto:erinhalden@erininabox.com" aria-label='email link'>
          <i className="fa-solid fa-square-envelope icon icon__footer"></i>
          </Link>
    </div>
  )
}

export default Footer