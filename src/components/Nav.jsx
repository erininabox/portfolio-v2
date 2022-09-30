import Link from 'next/link';
import React from 'react'

const Nav = () => {

  const handleOnClick = () => {
    document.getElementById("nav__checkbox").checked = false;
  }

  return (
    <div className='nav'>
    <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <i className="fa-solid fa-bars menu"></i>
        <i className="fa-solid fa-xmark close"></i>
      </label>
      
      <ol className='nav__ol'>
        <li><Link href="/#about" className='nav__a' onClick={handleOnClick}>About</Link></li>
        <li><Link href="/#portfolio" className='nav__a' onClick={handleOnClick}>Portfolio</Link></li>
        <li><Link href="/#experience" className='nav__a' onClick={handleOnClick}>Experience</Link></li>
        <li><Link href="/#contact" className='nav__a' onClick={handleOnClick}>Contact</Link></li>
      </ol>
    </div>
  )
}

export default Nav