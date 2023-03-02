import {useState} from "react"


const Services = () => {

    const [open, setOpen] = useState<number>(1);

    const handleOpen = (value:number) => {
        setOpen(open === value ? 0 : value);
    };
    
    return ( 
        <div id='services' className="rounded-t-[50px] text-left max-w-6xl bg-neutral-900 mx-4 mt-10 pt-10 px-5 sm:mx-auto">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-start-1 col-end-5">
                    <h1 className="text-neutral-300 text-5xl sm:text-7xl font-bold pl-10">OUR SERVICES<span className="text-[#EF4823]">.</span></h1>
                    <p className="text-neutral-500 pl-10 pt-6 tracking-wide">Every one of us loves something different. So, explore the world <br/> through the lens of our visual capabilitie, and find what you love</p>
                </div>
                <div className="col-end-7 col-span-2 text-center pt-16 justify-self-end space-y-1 sm:block hidden">
                    <div className="flex flex-initial w-64">
                        <div className="w-20 text-neutral-400 text-sm rounded-full border border-current my-1 mx-1 px-1">
                            <p className="py-1">Design</p>
                        </div>
                        <div className="w-28 text-neutral-400 text-sm rounded-full border border-current my-1 mx-1 px-1">
                            <p className="py-1">Development</p>
                        </div>
                    </div>
                    <div className="flex flex-initial w-64">  
                        <div className="col-end-3 w-30 text-neutral-400 text-sm rounded-full border border-current m-1 mx-1 px-2">
                            <p className="py-1">Digital Marketing</p>
                        </div>
                        <div className="col-span-4 w-14 text-neutral-400 text-sm rounded-full border border-current m-1 mx-1 px-1">
                            <p className="py-1">SEO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container max-w-5xl flex flex-col justify-center px-4 py-8 mx-auto md:p-8 ">
                    <div className="text-neutral-400 space-y-4 divide-y divide-neutral-800 border border-y-neutral-800 border-x-0 mt-7">

                        <details className="w-full" open={open === 1}>
                            <summary className="list-none px-4 py-6" onClick={() => handleOpen(1)}>
                                <div className="grid grid-cols-6 gap-x-52">
                                {open === 1 ?
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-100">
                                            UX/UI Design<span className="text-[#EF4823] font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-[#EF4823] text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡦</button> 
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-700">
                                            UX/UI Design<span className="text-neutral-900 font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-neutral-200 text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡥</button> 
                                        </div>
                                    </>
                                }
                                </div>   
                            </summary>
                            <div className="grid grid-cols-1 sm:grid-cols-6 pt-5">
                                <div className="sm:col-start-1 sm:col-end-3 text-center space-y-2">
                                    <div className="flex flex-initial w-64 ml-4 sm:ml-0">
                                        <div className="w-32 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Web & Mobie App</p>
                                        </div>
                                        <div className="w-20 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Website</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-initial w-64 ml-4 pb-8 sm:ml-0 sm:pb-0">  
                                        <div className="col-end-3 w-30 text-neutral-300 text-sm rounded-full border border-current mx-2 px-2 font-semibold">
                                            <p className="py-1">Dashboard</p>
                                        </div>
                                        <div className="col-span-4 w-24 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">E-commerce</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-end-7 sm:col-span-4">
                                    <p className="list-none px-4 py-6 pt-0 ml-4 -mt-4 text-neutral-200 text-[15px]">
                                        As a design development agency for both web and mobile applications,
                                        our specialists have analytical skills to organize complex user flows for easy use of the final product. 
                                        We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                                    </p>
                                </div>
                            </div>
                            
                        </details>

                        <details className="w-full" open={open === 2}>
                            <summary className="list-none px-4 py-6" onClick={() => handleOpen(2)}>
                                <div className="grid grid-cols-6 gap-x-52">
                                {open === 2 ?
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-100">
                                            Brand Design<span className="text-[#EF4823] font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-[#EF4823] text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡦</button> 
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-700">
                                            Brand Design<span className="text-neutral-900 font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-neutral-200 text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡥</button> 
                                        </div>
                                    </>
                                }
                                </div>   
                            </summary>
                            <div className="grid grid-cols-1 sm:grid-cols-6 pt-5">
                                <div className="sm:col-start-1 sm:col-end-3 text-center space-y-2">
                                    <div className="flex flex-initial w-64 ml-4 sm:ml-0">
                                        <div className="w-32 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Web & Mobie App</p>
                                        </div>
                                        <div className="w-20 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Website</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-initial w-64 ml-4 pb-8 sm:ml-0 sm:pb-0">  
                                        <div className="col-end-3 w-30 text-neutral-300 text-sm rounded-full border border-current mx-2 px-2 font-semibold">
                                            <p className="py-1">Dashboard</p>
                                        </div>
                                        <div className="col-span-4 w-24 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">E-commerce</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-end-7 sm:col-span-4">
                                    <p className="list-none px-4 py-6 pt-0 ml-4 -mt-4 text-neutral-200 text-[15px]">
                                        As a design development agency for both web and mobile applications,
                                        our specialists have analytical skills to organize complex user flows for easy use of the final product. 
                                        We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                                    </p>
                                </div>
                            </div>
                        </details>
                        <details className="w-full" open={open === 3}>
                        <summary className="list-none px-4 py-6" onClick={() => handleOpen(3)}>
                                <div className="grid grid-cols-6 gap-x-52">
                                {open === 3 ?
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-100">
                                            Graphic Design<span className="text-[#EF4823] font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-[#EF4823] text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡦</button> 
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="col-start-1 col-end-5 text-4xl sm:text-5xl font-semibold text-neutral-700">
                                            Graphic Design<span className="text-neutral-900 font-bold">.</span>
                                        </div>
                                        <div className="col-end-7 col-span-2">
                                            <button className="text-neutral-200 text-5xl sm:text-7xl ml-2 sm:ml-3 -mt-[18px] hidden sm:block">🡥</button> 
                                        </div>
                                    </>
                                }
                                </div>   
                            </summary>
                            <div className="grid grid-cols-1 sm:grid-cols-6 pt-5">
                                <div className="sm:col-start-1 sm:col-end-3 text-center space-y-2">
                                    <div className="flex flex-initial w-64 ml-4 sm:ml-0">
                                        <div className="w-32 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Web & Mobie App</p>
                                        </div>
                                        <div className="w-20 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">Website</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-initial w-64 ml-4 pb-8 sm:ml-0 sm:pb-0">  
                                        <div className="col-end-3 w-30 text-neutral-300 text-sm rounded-full border border-current mx-2 px-2 font-semibold">
                                            <p className="py-1">Dashboard</p>
                                        </div>
                                        <div className="col-span-4 w-24 text-neutral-300 text-sm rounded-full border border-current mx-2 px-1 font-semibold">
                                            <p className="py-1">E-commerce</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-end-7 sm:col-span-4">
                                    <p className="list-none px-4 py-6 pt-0 ml-4 -mt-4 text-neutral-200 text-[15px]">
                                        As a design development agency for both web and mobile applications,
                                        our specialists have analytical skills to organize complex user flows for easy use of the final product. 
                                        We create innovative and functional UX/UI design solutions for web and mobile applications of any complexity.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            

        </div>
     );
}
 
export default Services;