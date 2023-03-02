import star from "../assets/star-4.svg"

const Features = () => {
    return ( 
        <section id='about' className="max-w-6xl mx-4 sm:mx-auto pt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">

                <div className="flex p-4 space-x-4 md:space-x-6 text-neutral-900 text-left justify-items-center">
                    <div className="flex flex-col align-left">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-[#EF4823] rounded-full"><span className="text-[#EF4823] text-5xl sm:text-6xl ml-2 sm:ml-3">🡦</span></div>
                        <p className="capitalize leading-tight font-semibold text-[15px] pt-11">We are a Creative agency, based in New York. Vision Every company is performing best online. Mission Helping businesses to find the perfect and most succesful strategy, to be online.</p>
                        <img src={star} className="h-6 w-7 sm:h-8 sm:w-9 relative sm:top-14 top-11 left-[80px] sm:left-[150px]"/>
                        <button className="text-left bg-[#EF4823] py-3 rounded-full mt-1 mr-52 sm:mr-0">
                            <p className="text-xl tracking-wide font-semibold text-stone-100 outline outline-offset-4 outline-1 rounded-full items-center sm:text-3xl px-4 mx-2 sm:px-7 sm:mx-4">Get<br/>Started!</p>
                        </button>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-neutral-900 text-left w-72">
                    <div className="flex flex-col align-left">
                        <p className="text-4xl font-bold text-[#EF4823] pb-10 font-sans">What makes us special</p>
                        <p className="capitalize leading-tight font-semibold text-[15px]">Is to deliver awesome products for our clients. By awesome, this should be a tangible impact on their business. We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals. In every campaign and project, the results we aim to achieve are clear, the measures are clear and most importantly we are transparent throughout.</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-neutral-900 text-left w-72">
                    <div className="flex flex-col  align-left">
                        <p className="text-4xl font-bold text-[#EF4823] pb-10 sm:pb-20 font-sans">Our purpose</p>
                        <p className="capitalize leading-tight font-semibold text-[15px]">Is to deliver awesome products for our clients. By awesome, this should be a tangible impact on their business. We exist as a partner to businesses, crafting strategies that are aligned with our client’s business goals. In every campaign and project, the results we aim to achieve are clear, the measures are clear and most importantly we are transparent throughout.</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-neutral-900 text-left sm:justify-end">
                    <div className="flex flex-col justify-center align-left">
                        <div className="grid grid-rows-3 gap-7">
                            <div className="row-span-1">
                                <p className="text-[65px] font-semibold leading-none pb-2">30k<span className="relative -top-8 text-[40px] font-bold text-[#EF4823]">+</span></p>
                                <p className="capitalize text-[#EF4823] text-[20px] font-semibold">Projects Completed</p>
                            </div>
                            <div className="row-span-1">
                                <p className="text-[65px] font-semibold leading-none pb-2">70k</p>
                                <p className="capitalize text-[#EF4823] text-[20px] font-semibold">Clients</p>
                            </div>
                            <div className="row-span-1">
                                <p className="text-[65px] font-semibold leading-none pb-2">100k</p>
                                <p className="capitalize text-[#EF4823] text-[20px] font-semibold">Customers</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Features;