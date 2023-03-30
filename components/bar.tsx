import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const Bar:FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {
    console.log(level)
  return (
    <div className='my-2 text-white rounded-full bg-gray-300'>
        <div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600' 
        style={{width: level}}>
           
            <Icon className='mr-3 text-white'/>
            {name}
        </div>
    </div>
  )
}

export default Bar