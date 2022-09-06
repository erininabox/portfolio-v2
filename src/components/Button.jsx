import React from 'react'

const Button = (props) => {
    let text= props.text;
    let link= props.link;
  return (
    <a href={link}>
        <button className='button'>
            {text}
        </button>
    </a>
  )
}

export default Button