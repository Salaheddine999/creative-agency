import btn from '../assets/btn.png'

const Contact = () => {
    return (
        <div className="max-w-6xl mx-4 sm:mx-auto pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-1">
                <div className="col-start-1 col-end-6 text-left ">
                    <p className="text-neutral-900 font-bold text-5xl sm:text-[150px] leading-none tracking-tighter">Let's start something new together</p>
                </div> 
                <div className="sm:col-end-7 col-span-1 self-center">      
                    <a href='#'>
                        <img src={btn} className="pt-5 sm:pt-0 w-29 h-28 sm:w-42 sm:h-36"/>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;