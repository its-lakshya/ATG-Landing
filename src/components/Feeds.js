import FeedData from "../utils/FeedData";

import FeedStructure from "./FeedStructure";


const Feeds = () => {
    return (
        <div className="w-5/6 flex flex-col gap-y-4 max-md:w-full">
            {FeedData.map((data)=>{
                return (
                    <FeedStructure FeedData={data}/>
                )
            })}
        </div>
    )
}

export default Feeds;