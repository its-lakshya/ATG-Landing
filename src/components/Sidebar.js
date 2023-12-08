import LocationIcon from "../assets/LocationIcon.svg";
import PenIcon from "../assets/PenIcon.svg";
import ExIcon from "../assets/ExIcon.svg";

const Sidebar = () => {
    return (
        <div className='flex flex-col w-96 gap-y-12'>
            <div className="flex text-sm items-center justify-between border-b h-12">
                <div className="flex gap-x-2 text-sm">
                    <img src={LocationIcon} alt="Location icon"/>
                    Noida, India
                </div>
                <img src={PenIcon} alt="3 dot icon"/>
            </div>
            <button className="text-sm text-gray-400 flex items-start gap-x-2 text-left">
                <img src={ExIcon} alt="Ex icon" className='mt-1'/>
                Your location will help us serve better and extend a personalised experience
            </button>
        </div>
    )
}

export default Sidebar;