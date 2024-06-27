import { IoPersonCircle } from "react-icons/io5";
import { FaReply,FaShare } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiTipJarFill } from "react-icons/pi";
import { Review } from "@/data/review_model";

const ReviewItem = ({review}:{review: Review})=>{


    return (
        <div className="border rounded-lg py-2 px-5 mt-6 shadow-xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <IoPersonCircle size={40}/>
                    <div className="pl-1 font-semibold">{truncateAddresse(review.walletAddr)}</div>
                </div>
                <div>
                    {formatTimestamp(review.created_at)}
                </div>
            </div>

            <hr className="mb-6 mt-2"/>

            <div>
                {review.message}
            </div>
            
            <hr className="mt-6 mb-2"/>

            <div className="flex">
                <button className="flex border p-1 m-2 rounded-lg items-center">
                    <SlLike className="mr-2"/>
                    helpful
                </button>

                <button className=" flex border p-1 m-2 rounded-lg items-center">
                    <PiTipJarFill  className="mr-2"/>
                    tip
                </button>

                <button className="flex border p-1 m-2 rounded-lg items-center">
                    <FaReply  className="mr-2"/>
                    reply
                </button>
                
                <button className=" flex border p-1 m-2 rounded-lg items-center">
                    <FaShare  className="mr-2"/>
                    share
                </button>
            </div>
        </div>
    );
}

function formatTimestamp(timestamp: string): string {
    // Parse the PostgreSQL timestamp string
    const date = new Date(timestamp);

    // Get the user's locale (optional: replace with your logic to retrieve locale)
    const userLocale = navigator.language || navigator.languages[0];

    // Format the date and time according to user locale
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC', // Ensure consistent starting point (optional)
    };

    return date.toLocaleString(userLocale, options);
}

function truncateAddresse(walletAddress: string): string{
    return walletAddress.substring(0,5)+"..."+walletAddress.substring(walletAddress.length - 5);
}

export default ReviewItem