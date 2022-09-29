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
        <li><a href="/#about" className='nav__a' onClick={handleOnClick}>About</a></li>
        <li><a href="/#portfolio" className='nav__a' onClick={handleOnClick}>Portfolio</a></li>
        <li><a href="/#experience" className='nav__a' onClick={handleOnClick}>Experience</a></li>
        <li><a href="/#contact" className='nav__a' onClick={handleOnClick}>Contact</a></li>
      </ol>
    </div>
  )
}

export default Nav