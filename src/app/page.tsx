import Navbar from "../components/Navbar";
import Header from '../components/Header'
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import { getSocials } from "@/utils/sanity-utils";
import Divider from "@/components/Divider";
import Footer from "@/components/footer";



export default async function Home() {

  const socialData=await getSocials()
  // console.log(socialData)


  return (
   <div className="">
    {/* navbar */}
    <Navbar props={socialData}/>
    {/* header */}
    <Header props={socialData} />
    <Divider/>
    {/* about */}
    <About/>
    <Divider/>
    {/* skills */}
    <Skills/>
    <Divider/>
    {/* projects */}
    <Projects/>
    <Divider/>
    {/* blogs */}
    <Blogs/>
    <Divider/>
    {/* contact */}
    <Contact/>
    {/* footer */}
    <Footer props={socialData}/>
   </div>
  )
}