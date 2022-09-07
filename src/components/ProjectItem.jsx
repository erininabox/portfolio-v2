import React from 'react'

const ProjectItem = (props) => {
  console.log("Props" + props.data)
  let name = props.data.name;
  let id = props.id;

  return (
    <div>
        ProjectItem
        <p />{name}
        <p />{id}

    </div>
  )
}

export default ProjectItem