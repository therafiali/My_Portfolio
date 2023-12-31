import Image from 'next/image'
import React from 'react'
import Motion from './Motion'
import { PortableTextBlock } from 'sanity'
import { getAbout } from '@/utils/sanity-utils'
import  {PortableText}  from '@portabletext/react'

type Props = {
  bio:PortableTextBlock,
  secondImage:string
}

const About = async () => {

  const aboutData:Props=await getAbout()
  
  

  return (
    <section className=' max-w-7xl md:h-screen mx-auto p-5 flex flex-col items-center justify-center md:space-y-24 relative mt-8 md:mt-0'>
       <h1 className=' absolute top-0 text-2xl uppercase tracking-wider md:tracking-[20px] text-violet-500'>about</h1>
       <div className='flex flex-col-reverse md:flex-row items-center md:justify-between w-full  '>
            <div className='md:w-[70%] w-full'>
            <Motion delay={1} direction={'left'}>
                <div className='p-4 text-center md:text-left font-semibold text-sm'>
                    {/* <PortableText value={aboutData.bio}/> */}
                    <p>
                    I am a highly motivated <span className='bg-yellow-200 px-2'> Jamstack Developer & Modern Web App developer</span> with a strong foundation in programming and a sharp focus on design. My passion lies in delivering innovative solutions that push the boundaries of technology.
                    </p>
                </div>
            </Motion>
            <div className='md:hidden  md:mt-0 p-4 text-center md:text-left font-semibold text-sm'>
                    <PortableText value={aboutData.bio}/>
                </div>
            </div>
            

            <div className='w-[200px] md:w-auto'>
            <Motion delay={1} direction={'right'}>
                <div className='flex items-center justify-center shadow-lg shadow-gray-400 rounded-lg bg-white h-[250px] p-2 w-full my-12'>
                    <div className='w-full h-full bg-violet-500 rounded-lg hover:scale-105 duration-300'>
                    <Image src={aboutData.secondImage} alt="img" className="rounded-lg w-full h-full object-cover" height={150} width={150} />
                    </div>
                </div>
            </Motion>
            <div className='md:hidden flex items-center justify-center shadow-lg shadow-gray-400 rounded-lg bg-white h-[250px] p-2 w-full my-12'>
                    <div className='w-full h-full bg-violet-500 rounded-lg hover:scale-105 duration-300'>
                    <Image src={aboutData.secondImage} alt="img" className="rounded-lg w-full h-full object-cover" height={150} width={150} />
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default About
