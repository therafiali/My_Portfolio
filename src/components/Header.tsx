import Image from 'next/image'
import React from 'react'
import TypeWriter from './TypeWriter'
import CursorComponent from './CursorComponent'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
import { Profile } from '@/utils/types/Profile'
import { getProfile } from '@/utils/sanity-utils'
import { Social } from '@/utils/types/Social'

type Props = {
  props:Social[]
}

const  Header = async ({props}: Props) => {
  
  const profileData:Profile=await getProfile()
 


  return (
    <section className='relative z-0 md:h-[calc(100vh-56px)] w-full flex justify-center items-center mt- md:mt-0 '>
       <div className='flex flex-col items-center justify-center space-y-4 '>
        <Motion delay={1} direction='down'>
        <div className='bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md  hover:scale-105 duration-500  border bg-gradient-to-r from-fuchsia-500 to-indigo-600 mt-12 md:mt-0'>
            <Image src={profileData.image} alt="img" className="rounded-full " height={150} width={150}/>
          </div>
        </Motion>

        <div className='md:hidden bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md  hover:scale-105 duration-500  border bg-gradient-to-r from-fuchsia-500 to-indigo-600 md:mt-0'>
            <Image src={profileData.image} alt="img" className="rounded-full " height={150} width={150}/>
          </div>
          
          <Motion delay={1} direction=''>
          <p className='font-bold max-w-lg text-justify px-4 md:px-0'>{profileData.smallBio}</p>
          </Motion>
          
          <p className='md:hidden font-bold max-w-lg text-center md:text-start px-4 md:px-0'>{profileData.smallBio}</p>

          <Motion delay={1} direction=''>
          <div className='flex justify-center space-x-2 items-center'>
          <TypeWriter professions={profileData.profession} />
          <CursorComponent/>
          </div>
          </Motion>

          <div className='md:hidden flex justify-center space-x-2 items-center'>
          <TypeWriter professions={profileData.profession} />
          <CursorComponent/>
          </div>

          <Motion delay={1} direction=''>
          <div className='flex items-center space-x-6'>
      
          {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))}
        </div>
        </Motion>

        <div className='md:hidden flex items-center space-x-6'>
      
      {props?.map((s:Social,index:number)=>(
      <SocialIcon key={index} style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
    ))}
    </div>
          
       </div>
       <div className='h-[30%] -z-10 absolute w-[50%] md:w-[20%] opacity-50 fliter blur-3xl bg-gradient-to-r from-fuchsia-500 to-indigo-600'/>
    </section>
  )
}

export default Header