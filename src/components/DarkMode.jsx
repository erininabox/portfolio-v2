import React, { useState } from 'react'

const DarkMode = () => {
    const [toggle, setToggle] = useState(false);

    style = () => {
        toggle===true ? 'light' : 'dark'
    }
    
  return (
    <>
        <button className={style} onClick={() => setToggle(!toggle)}></button>
    </>
  )
}

export default DarkMode