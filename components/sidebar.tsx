'use client'
import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'

// https://www.youtube.com/watch?v=Ppvmwkx5fbg&list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53&index=3

const Sidebar = () => {
  const handleClick = () => {
    window.open('mailto:khurram@pide.org.pk')
  }

  const {theme,setTheme} = useTheme();
  const toggleTheme = ()=>{
    setTheme(theme === "light" ? "dark" : "light") 
    console.log(theme)
  }

  return (
    <div>
        <img src='picture.jpg' alt="picture" className='w-32 h-32 mx-auto rounded-full' />
        <h3 className='my-4 text-2xl font-medium font-kaushan'><span className='text-green' >Khurram</span> Iqbal</h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>FullStack Developer</p>
        <a className='flex px-2 py-1 my-3 bg-gray-200 rounded-full ' href='' ><GiTie className='w-6 h-6'/>Download Resume </a>
        {/* // Social Icons */}
        <div className='flex justify-around w-9/12 mx-auto text-green md:w-full'>
            <a href='#' ><AiFillGithub className='w-6 h-6 cursor-pointer'/></a>
            <a href='#' ><AiFillLinkedin className='w-6 h-6 cursor-auto'/></a>
            <a href='#' ><AiFillGithub className='w-6 h-6 cursor-auto'/></a>
        </div>
        {/* Address  */}
        <div className='flex flex-col justify-center py-4 my-5 bg-gray-200 ' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
            <div className='flex space-x-2 mx-auto'>
                <GoLocation/>
               <span>Islamabad, Pakistan</span> 
            </div>
            <p className='mt-2'>khurram@pide.org.pk</p>
            <p className='mt-2'>+92 333 5165703</p>
        </div>
        
        <button className='focus:outline-none w-8/12 px-5 py-1 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400' onClick={handleClick}  >Email</button>
        <button onClick={toggleTheme} className='w-8/12 py-1 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
    </div>
  )
}

export default Sidebar