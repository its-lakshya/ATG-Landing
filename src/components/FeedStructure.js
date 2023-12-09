import DotIcon from "../assets/DotIcon.svg"
import ViewIcon from "../assets/ViewIcon.svg"
import ShareIcon from "../assets/ShareIcon.svg"
import CalenderIcon from "../assets/CalenderIcon.svg"
import LocationIcon from "../assets/LocationIcon.svg"

const FeedStructure = ({FeedData}) => {
    return (
        <div className='flex flex-col border rounded-md pb-4'>
                {FeedData.image ? <img src={FeedData.image} alt="Feed img 1" /> : null}
                <div className="px-4 flex flex-col gap-y-4 mt-4">
                    <span className='max-w-2xl'><img src={FeedData.type} alt="type img" /></span>
                    <div className="flex items-start justify-between text-2xl font-semibold ">
                        {FeedData.title}
                        <img src={DotIcon} alt="Dot icon" />
                    </div>
                    {FeedData.content ? 
                        <div className="text-lg text-gray-600">
                            {FeedData.content}
                        </div> 
                        : 
                        <div className="flex items-center gap-x-10">
                            <div className="flex gap-x-2">
                                <img src={CalenderIcon} alt="Calender icon" />
                                {FeedData.date}
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src={LocationIcon} alt="Location Icon" />
                                {FeedData.location}
                            </div>
                        </div>
                    }
                    {FeedData.buttonText ? 
                        <button className={`w-full border rounded-lg h-12 ${FeedData.buttonTextColor}`}>
                            {FeedData.buttonText}
                        </button>
                        :
                        null
                    }
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-lg font-bold gap-x-6">
                            <img src={FeedData.dp} alt="author img"/>
                            {FeedData.authorName}
                        </div>
                        <div className='flex items-center justify-between gap-x-10'>
                            <div className='flex items-center gap-x-2'>
                                <img src={ViewIcon} alt="View icon" />
                                {FeedData.views} views
                            </div>
                            {/* <img src={ShareIcon} alt="share icon " /> */}
                            <div className='flex gap-x-2 bg-gray-200 items-center justify-center h-10 px-3 rounded-md'>
                                <img src={ShareIcon} alt="share icon"/>
                                <span className='md:hidden'>Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FeedStructure;