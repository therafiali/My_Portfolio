import Footer from '@/components/footer'
import Motion from '@/components/Motion'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import { getBlogPosts, getSocials } from '@/utils/sanity-utils'
import { BlogPost } from '@/utils/types/BlogPost'

import React from 'react'


type Props = {}

const PostsPage = async(props: Props) => {

  const socialData=await getSocials()
  const blogData:BlogPost[]=await getBlogPosts()

  return (
    <section className='w-full bg-[#F1F6F9]'>
      <Navbar props={socialData}/>
      <div className='max-w-7xl min-h-screen mx-auto p-5'>
      <Motion delay={1} direction={''}>
            <div className='w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {blogData.map((b:BlogPost,index:number)=>(
              <Post key={index} props={b}/>
            ))}
            </div>
      </Motion>
      <div className='md:hidden w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {blogData.map((b:BlogPost,index:number)=>(
              <Post key={index} props={b}/>
            ))}
            </div>
        </div>
      <Footer props={socialData}/>
    </section>
  )
}

export default PostsPage