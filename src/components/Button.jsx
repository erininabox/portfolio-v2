import Link from 'next/link';
import React from 'react'

const Button = (props) => {
    let text= props.text;
    let link= props.link;
  return (
    <Link href={link}>
        <button className='button'>
            {text}
        </button>
    </Link>
  )
}

export default Button