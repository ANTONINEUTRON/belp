"use client"

import { IoPersonCircle } from "react-icons/io5";
import { FaShare } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiTipJarFill } from "react-icons/pi";
import { Review } from "@/data/review_model";
import Link from "next/link";
import { Popover } from "antd";
import CopySection from "./copy_section";

const actionsClassNames = "flex border p-1 px-2 m-2 rounded-lg items-center text-secondary border-secondary shadow-2xl hover:text-tertiary";

const ReviewItem = ({review}:{review: Review})=>{

    return (
        <div className="border rounded-lg py-2 px-5 mt-6 shadow-xl">
            <div className="flex justify-between items-center">
                <Link href={"https://explorer.solana.com/address/"+review.walletAddr} target="_blank">
                    <div className="flex items-center text-primary hover:text-lg">
                        <IoPersonCircle size={40}/>
                        <div className="pl-1 font-semibold">{truncateAddresse(review.walletAddr)}</div>
                    </div>
                </Link>
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
                <button className={actionsClassNames}>
                    <SlLike className="mr-2"/>
                    Helpful
                </button>

                <button className={actionsClassNames}>
                    <PiTipJarFill  className="mr-2"/>
                    Tip
                </button>

                {/* <button className={actionsClassNames}>
                    <FaReply  className="mr-2"/>
                    reply
                </button> */}
                <Popover content={(<CopySection text={window.location.href} />)} title="Copy link">
                    <button className={actionsClassNames}>
                        <FaShare  className="mr-2"/>
                        Share
                    </button>
                </Popover>
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