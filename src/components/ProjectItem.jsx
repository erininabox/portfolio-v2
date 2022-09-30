import React from 'react'

const ProjectItem = (props) => {
  let name = props.data.name;
  let demo = props.data.demo; // may be empty
  let description = props.data.description;
  let org = props.data.org;
  let repos = props.data.repo; // will return array
  let role = props.data.role;
  let techStack = props.data.techStack; // will return array
  // let year = props.data.year;

  return (
    <div className='project'>
      <div className='project__grid'>   
          <h4 className='project__title'>{name}</h4>
          <span  className='project__repo'>
              {repos.map((repo,index) => {
                  return <a href={repo} key={index}><i className="fa-brands fa-github project__repo-icon"></i></a>
              })}
              { {demo} ? 
                <a href={demo}><i className="project__repo-icon fa-solid fa-arrow-up-right-from-square"></i></a>
                : ""
              }
          </span>
          <p className='project__description'>{description}</p>
          <span className='project__org-role'>
              {role} // {org}
          </span>

        <span className='project__tstack'>
          {techStack.map((tech, index) => {
            return (
              <span key={index} className='project__tstackitems' >
                  {tech}
              </span>
            )
          })}
        </span>
      </div>          

    </div>
  )
}

export default ProjectItem