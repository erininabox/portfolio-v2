import React from 'react'

const Nav = () => {

  const handleOnClick = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.getAttribute('href').scrollIntoView({
              behavior: 'smooth'
          });
      });
  };

  return (
    <div className='nav'>
      
      <ol className='nav__ol'>
        <li><a href="https://erininabox.com/#about" className='nav__a' onClick={handleOnClick}>About</a></li>
        <li><a href="https://erininabox.com/#portfolio" className='nav__a' onClick={handleOnClick}>Portfolio</a></li>
        <li><a href="https://erininabox.com/#contact" className='nav__a' onClick={handleOnClick}>Contact</a></li>
      </ol>
    </div>
  )
}

export default Nav