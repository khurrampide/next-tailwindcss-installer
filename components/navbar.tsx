'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// const NavItem:FunctionComponent<(
//         activeItem:string,
//         setActiveItem:Function,
//         name:string,
//         route:string
//         )> = ({activeItem, name, route, setActiveItem})=>{
//     return (
//         {
//             activeItem !== 'About' && (
//                 <Link href="/" ><span onClick={()=>setActiveItem('About')}>About</span></Link>
//             )
//         }

//     )
// }

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('About');

    // const {pathname} = useRouter()
    
    // useEffect(()=>{
    //     if (pathname === '/') setActiveItem("About")
    //     if (pathname === '/projects') setActiveItem("Projects")
    //     if (pathname === '/resume') setActiveItem("Resume")
    // },[])

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
        <span className='font-bold text-green border-green text-xl border-b-4 md:text-2xl'>{activeItem}</span>
        <div className='flex space-x-3 text-red-400 text-lg'>
        {
            activeItem !== 'About' && (
                <Link href="/" ><span className='hover:text-green' onClick={()=>setActiveItem('About')}>About</span></Link>
            )
        }
            {
                activeItem !== 'Projects' && (
                    <Link href="/projects" ><span className='hover:text-green' onClick={()=>setActiveItem('Projects')}>Projects</span></Link>
                )
            }
            {
                activeItem !== 'Resume' && (
                    <Link href="/resume" ><span className='hover:text-green' onClick={()=>setActiveItem('Resume')}>Resume</span></Link>
                )
            }
        </div>
    </div>
  )
}

export default Navbar