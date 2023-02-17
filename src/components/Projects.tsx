import prj1 from '../assets/prj1.png'
import prj2 from '../assets/prj2.png'
import prj3 from '../assets/prj3.png'
import prj4 from '../assets/prj4.png'
import prj5 from '../assets/prj5.png'


const Projects = () => {
    return ( 
        <div className="text-left max-w-6xl bg-neutral-900 mx-4 pt-10 px-5 sm:mx-auto rounded-b-[50px]">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-start-1 col-end-4">
                    <h1 className="text-[#EF4823] text-5xl sm:text-7xl font-bold pl-10">PROJECTS.</h1>
                </div>
                <div className="text-neutral-500 col-end-7 col-span-3 tracking-wider text-right pt-5 pr-10  sm:block hidden">
                    <p>Creative fuels design, design fuels creativity, be <br/>here for more, are you in love with a creative?</p>
                </div>
            </div>
            <div className="grid grid-cols-1 items-center mt-10 pb-5 sm:grid-cols-6 text-center mx-10">
                <div className="sm:flex flex-auto w-96 gap-4 space-y-2 sm:space-y-0">
                    <div className="sm:col-start-1 sm:col-end-2 h-10 py-1 px-3 max-w-max text-lg text-neutral-700 rounded-full border border-current hover:text-neutral-200">
                        Design
                    </div>
                    <div className="sm:col-start-2 sm:col-end-3 h-10 py-1 px-3 max-w-max text-lg text-neutral-700 rounded-full border border-current hover:text-neutral-200">
                        Developement
                    </div>
                    <div className="sm:col-start-3 sm:col-end-4 h-10 py-1 px-3 max-w-max text-lg text-neutral-700 rounded-full border border-current hover:text-neutral-200">
                        Marketing
                    </div>
                    <div className="sm:col-start-4 sm:col-end-5 h-10 py-1 px-3 max-w-max text-lg text-neutral-700 rounded-full border border-current hover:text-neutral-200">
                        SEO
                    </div>
                </div>
                <div className="col-end-7 col-span-3 outline outline-neutral-700 outline-1 hidden sm:block"></div>
            </div>
            <div className="pt-6 px-4 pb-10">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 rounded-b-xl">
                        <div className='relative overflow-hidden bg-no-repeat bg-cover max-w-full'>
                            <img className="object-cover w-full h-80 aspect-square" src={prj1}/>
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-neutral-800">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                            <img className="object-cover w-full h-80 aspect-square" src={prj2} />
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-neutral-800">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                            <img className="object-cover w-full h-80 aspect-square" src={prj3} />
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-neutral-800">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden bg-no-repeat bg-cover w-full'>
                            <img className="object-cover w-full h-80 aspect-square sm:rounded-bl-[50px]" src={prj4} />
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-neutral-800 sm:rounded-bl-[50px]">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                            <img className="object-cover w-full h-80 aspect-square" src={prj3} />
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-neutral-800">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                            <img className="object-cover w-full h-80 aspect-square sm:rounded-br-[50px]" src={prj5} />
                            <div className="grid absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-neutral-800 sm:rounded-br-[50px]">
                                <a className='text-[#EF4823] text-7xl justify-self-end' href='#'>🡥</a>
                                <p className='pl-5 pr-5 text-neutral-100 text-5xl font-semibold'><span className='text-3xl'>2022</span><br/>Gerades Haus</p>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Projects;