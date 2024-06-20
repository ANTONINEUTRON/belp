import { IoPersonCircle } from "react-icons/io5";
import { FaReply,FaShare } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";

const ReviewItem = ()=>{
    return (
        <div className="border rounded-lg py-2 px-5 mt-6 shadow-xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <IoPersonCircle size={40}/>
                    <div className="pl-1 font-semibold">Wallet Address</div>
                </div>
                <div>
                    12/14/2024
                </div>
            </div>

            <hr className="mb-6 mt-2"/>

            <div>Easy to check out rates and pick a supplier for your utility's , definitely recommend</div>
            
            <hr className="mt-6 mb-2"/>
            <div className="flex">
                <button className="flex border p-1 m-2 rounded-lg items-center">
                    <SlLike className="mr-2"/>
                    helpful
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

export default ReviewItem