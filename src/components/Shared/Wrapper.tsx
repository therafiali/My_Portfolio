
const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="md:px-12 mx-auto h-screen w-full overflow-x-hidden  bg-[#F1F6F9]">
        {children}
    </section>
  )
}

export default Wrapper