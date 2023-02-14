import heroshape from "../assets/heroshape.png" 
import star from "../assets/star-1.svg"



const Hero = () => {
      
    return (
        <div className="max-w-6xl mx-4 sm:mx-auto">
            <div className="grid grid-cols-6">
                <div className="col-start-1 col-span-4">
                    <h1 className="text-[#1C1A1D] font-bold text-left -tracking-[7px] leading-none text-8xl sm:text-[160px]">CREATIVE</h1>
                </div>
                <div className="col-end-7 col-span-2 max-[600px]:hidden">
                    <img src={heroshape} className="h-28 w-96 mt-9"/>
                </div>
            </div>

            <div className="grid grid-cols-6">
                <div className="col-start-1 col-span-3">
                    <h1 className="text-[#1C1A1D] text-left font-bold -tracking-[7px] leading-none text-8xl sm:text-[160px]">AGENCY</h1>
                </div>
                <div className="grid-rows-2 col-end-7 row-span-2 col-span-3 text-left leading-tight text-xl">
                    <div className="grid grid-cols-3 py-7 ml-52 max-[600px]:hidden">
                        <img src={star} className=""/>
                        <img src={star} className=""/>
                        <img src={star} className=""/>
                    </div>
                    <div className="row-span-2">
                        <p className="mt-[110px] -ml-48 sm:tracking-[1px] sm:ml-32 sm:mt-auto">
                        The art of visual communication, creatively
                        impacting the world around us-one good
                        design at a time, design like you mean it!
                        </p>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 items-center mt-10 pb-5 sm:grid-cols-6">
                <div className="col-start-1 col-end-2 h-8 py-1 font-semibold text-neutral-500 text-sm rounded-full border-2 border-current">
                    2022 Best Agency
                </div>
                <div className="col-start-2 col-end-3 h-8 py-1 font-semibold text-neutral-500 text-sm rounded-full border-2 border-current">
                    World Class Agency
                </div>
                <div className="col-end-7 col-span-4 outline outline-neutral-500 outline-1 max-[600px]:hidden"></div>
            </div>

        </div>
     );
}
 
export default Hero;