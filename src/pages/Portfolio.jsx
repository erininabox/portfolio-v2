import React from 'react'
import FeaturedProjectItem from '../components/FeaturedProjectItem';
import ProjectItem from '../components/ProjectItem';


const Portfolio = (props) => {
    // console.log("Props" + props);

    let regularProjectItems = [];
    let featuredProjectItems = [];
    // console.log(regularProjectItems);

    props.data.filter((item) => {
        if (item.featured === true) {
            featuredProjectItems.push(item)
        } else {
            regularProjectItems.push(item)
        }
    });

    const renderFeaturedComps = () => featuredProjectItems.map((item, idx) => {
        // console.log(idx)
        return (
            <FeaturedProjectItem data={item} key={idx} />
        )
    })
  
    const renderPortfolioComps = () => regularProjectItems.map((item, idx) => {
        // console.log(idx)
        return(<ProjectItem data={item} key={idx} />)
    })


  return (
    <div className='portfolio'>
        <h3 className='portfolio__header'>Featured Projects</h3>
        {renderFeaturedComps()}
        <h3 className='portfolio__header'>Additional Projects</h3>
        {renderPortfolioComps()}
        
    </div>
  )
}

export default Portfolio