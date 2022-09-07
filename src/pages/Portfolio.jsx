import React from 'react'
import ProjectItem from '../components/ProjectItem';


const Portfolio = (props) => {
    // console.log("Props" + props);

    let portfolioItems = props.data;
    console.log("Portfolio Items: " + portfolioItems)

    // const renderPortfolioItems = () => portfolioItems.forEach((item) => {
    //     return <ProjectItem data={item} />
    // })
  return (
    <div className='portfolio'>
        {portfolioItems.map((item) => {
        return <ProjectItem data={item} id={item.id} />
    })}
        
    </div>
  )
}

export default Portfolio