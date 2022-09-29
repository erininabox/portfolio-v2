import React from 'react'

const FeaturedProjectItem = props => {
    let name = props.data.name;
    let demo = props.data.demo; // may be empty
    let description = props.data.description;
    let img = props.data.img;
    // console.log("img ==>" + img)
    let org = props.data.org;
    // console.log(org);
    let repos = props.data.repo; // will return array
    // console.log(repos[0]);
    let role = props.data.role;
    let techStack = props.data.techStack; // will return array
    // let year = props.data.year;

    return (
      <div className='project--featured'>
        <div className='project__grid--featured'>
            <img src={img} className="project__img--featured" />    

            <h4 className='project__title--featured'>{name}</h4>
            <span  className='project__repo--featured'>
                {repos.map((repo) => {
                    return <a href={repo}><i className="fa-brands fa-github project__repo-icon--featured"></i></a>
                })}
                <a href={demo}><i className="project__repo-icon--featured fa-solid fa-arrow-up-right-from-square"></i></a>
            </span>
            <p className='project__description--featured'>{description}</p>
            <span className='project__org-role--featured'>
                {role} // {org}
            </span>
            <span className='project__tstack--featured'>
                {techStack.map((tech) => {
                    return `${tech} `
                })}
            </span>
        </div>          
  
      </div>
    )
}


export default FeaturedProjectItem