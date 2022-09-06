import React from 'react'
import ProjectItem from '../components/ProjectItem';


const Portfolio = (props) => {
    console.log(props);

    let portfolioItems = props.data;
    console.log("Portfolio Items: " + portfolioItems)
  return (
    <div className='portfolio'>
        Portfolio
        
    </div>
  )
}

export default Portfolio