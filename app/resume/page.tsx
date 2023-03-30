
'use client'
import React from 'react'
import { languages, tools } from '@/data'
import Bar from '@/components/bar'


const Resume = () => {
  return (
    <div className='px-6 py-2'>
    {/* // Education & Experience */}
    <div className='grid md:grid-cols-2 gap-6'>
      <div>
        <h5 className='my-3 text-2xl font-bold'>Education</h5>
        <div>
          <h5 className='my-2 font-bold text-xl'>Computer Science Engineering</h5>
          <p className='font-semibold'>International Islamic University Islamabad</p>
          <p className='my-3'>I am currently working at PIDE as Web Manager.</p>
        </div>
      </div>

      <div>
        <h5 className='my-3 text-2xl font-bold'>Experience</h5>
        <div>
          <h5 className='my-2 font-bold text-xl'>Web Manager</h5>
          <p className='font-semibold'>PIDE</p>
          <p className='my-3'>I have done work in Ultimus, Elixir Technologies, Buraq Integrated Solutions</p>
        </div>
      </div>

    </div>

    {/* // Languages & Tools */}

    <div className='grid md:grid-cols-2 gap-6'>
      <div>
        <h5 className='my-5 text-2xl font-bold'>Languages & Frameworks</h5>
        <div className='my-2'>
          {
            languages.map(Language => <Bar data={Language} key={Language.name} />)
          }
        </div>
      </div>

      <div>
        <h5 className='my-5 text-2xl font-bold'>Tools & Softwares</h5>
        <div className='my-2'>
          {
            tools.map(Tool => <Bar data={Tool} key={Tool.name} />)
          }
        </div>
      </div>


    </div>

    </div>
  )
}

export default Resume