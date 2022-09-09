import React from 'react'
import FeaturedProjectItem from '../components/FeaturedProjectItem';
import ProjectItem from '../components/ProjectItem';


const Portfolio = (props) => {
    // console.log("Props" + props);

    let regularProjectItems = [];
    let featuredProjectItems = [];

    props.data.filter((item) => {
        if (item.featured === true) {
            featuredProjectItems.push(item)
        } else {
            regularProjectItems.push(item)
        }
    });


    console.log("Portfolio Items: " + regularProjectItems.map(item => {return item.name}))
    console.log("Featured Portfolio Items: " + featuredProjectItems.map(item => {return item.name}))


    // })
  return (
    <div className='portfolio'>
        <h3 className='portfolio__header'>Featured Projects</h3>
        {featuredProjectItems.map((item) => {
            return <FeaturedProjectItem data={item} key={item.id} />
        })}
        <h3 className='portfolio__header'>Additional Projects</h3>
        {regularProjectItems.map((item) => {
            return <ProjectItem data={item} key={item.id} />
        })}
        
    </div>
  )
}

export default Portfolio