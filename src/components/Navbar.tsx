"use client"
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {usePathname} from 'next/navigation'
import Motion from './Motion'
import { Social } from '@/utils/types/Social'


type Props = {
  props:Social[]
}

const Navbar = ({props}: Props) => {
  const pathname=usePathname()
  
  return (
    <nav className='sticky top-0 max-w-7xl mx-auto p-5 flex items-center justify-center  md:justify-between z-20 bg-gradient-to-r from-fuchsia-100 to-indigo-200'>
      <Motion delay={1} direction={'left'}>
      <div className='hidden sm:flex items-center md:space-x-6'> 
        {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
        </div>
      </Motion>
      
        
        <Motion delay={1} direction={'right'}>
        <div className='flex items-center md:justify-center space-x-8 justify-between md:space-x-8'>
       {pathname!=="/projects" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/projects">Projects</Link>}
       {pathname!=="/posts" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/posts">Blogs</Link>}
       {pathname!=="/" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/">home</Link>}
        </div>

        </Motion>

        <div className='md:hidden flex items-center md:justify-center space-x-8 justify-between md:space-x-8'>
       {pathname!=="/projects" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/projects">Projects</Link>}
       {pathname!=="/posts" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/posts">Blogs</Link>}
       {pathname!=="/" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base font-bold' href="/">home</Link>}
        </div>
        
        
    </nav>
  )
}

export default Navbar