import { IProject } from '@/type'
import React from 'react'
import { FunctionComponent } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard:FunctionComponent<{
    project:IProject
}> = ({project: {
  name,
  description,
  image_path,
  deployed_url,
  github_url,
  category,
  key_techs,
}

}) => {
  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" />
      <p className='my-2 text-center'>{name}</p>

      <div className='grid md:grid-cols-2'>
        <div>
          <img src={image_path} alt={name} />
          <div>
            <a href={github_url}>
              <AiFillGithub /> <span>Github</span>
            </a>
            <a href={deployed_url}>
              <AiFillGithub /> <span>Github</span>
            </a>
          </div>
        </div>
        
        <div>

        </div>

      </div>



    </div>
  )
}

export default ProjectCard