import React from 'react'
import FeaturedProjectItem from './FeaturedProjectItem';
import ProjectItem from './ProjectItem';


const Portfolio = (props) => {

    let regularProjectItems = props.data.filter((regular) => regular.featured===false && regular.display===true)
    let featuredProjectItems = props.data.filter((featured) => featured.featured===true && featured.display===true)

    const featuredList = featuredProjectItems.map((item) => 
        <FeaturedProjectItem key={item.id} data={item} />
    )

    const regularList = regularProjectItems.map((item) => 
        <ProjectItem data={item} key={item.id} />
    )


    return (
        <div className='portfolio'>
            <h3 className='portfolio__header'>Featured Projects</h3>
            {featuredList}
            <h3 className='portfolio__header'>Additional Projects</h3>
            {regularList}
            
        </div>
  )
}

export default Portfolio