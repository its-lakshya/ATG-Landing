import LandingImage from "../assets/LandingImage.svg";

const Landing = () => {
    return (
        <div style={{backgroundImage: `url(${LandingImage})`}} className='w-full h-[27rem] flex items-end' >
            <div className='flex flex-col text-white font-medium text-4xl tracking-wide gap-y-2 bg-black bg-opacity-50 w-full h-full px-52 justify-end pb-20'>
                Computer Engineering
                <span className='text-base font-normal tracking-normal'>142,765 Computer Engineers follow this</span>
            </div>
        </div>
    )
}

export default Landing;