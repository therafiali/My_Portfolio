import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Social } from '@/utils/types/Social'


type Props = {
  props:Social[]
}

const Footer = ({props}: Props) => {
  return (
    <footer className='bg-violet-900 w-full py-5 mt-4 md:mt-0'>
       <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
       <Motion delay={1} direction={'left'}>
       <div className='flex items-center space-x-6'>
       {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#F1F6F9' fgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
      </div>
       </Motion>

       <div className='md:hidden flex items-center space-x-6'>
       {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#F1F6F9' fgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
      </div>
       
       <Motion delay={1} direction={'right'}>
        <p className='text-[#F1F6F9] text-xs md:text-sm'>Made with Muhammad Rafi Ali</p>
        </Motion>
        <p className='md:hidden block text-[#F1F6F9] text-xs md:text-sm'>Made with Muhammad Rafi Ali</p>
       </div>
    </footer>
  )
}

export default Footer