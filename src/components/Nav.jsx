import React from 'react'

const Nav = () => {

  const handleOnClick = (e) => {
    e.preventDefault();
    document.getElementById("nav__checkbox").checked = false;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.getAttribute('href').scrollIntoView({
              behavior: 'smooth'
          });
      });
  };

  return (
    <div className='nav'>
    <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <i className="fa-solid fa-bars menu"></i>
        <i className="fa-solid fa-xmark close"></i>
      </label>
      
      <ol className='nav__ol'>
        <li><a href="https://erininabox.com/#about" className='nav__a' onClick={handleOnClick}>About</a></li>
        <li><a href="https://erininabox.com/#portfolio" className='nav__a' onClick={handleOnClick}>Portfolio</a></li>
        <li><a href="https://erininabox.com/#contact" className='nav__a' onClick={handleOnClick}>Contact</a></li>
      </ol>
    </div>
  )
}

export default Nav