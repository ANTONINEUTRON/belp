"use client"

import { IoPersonCircle } from "react-icons/io5";
import { FaShare } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiTipJarFill } from "react-icons/pi";
import { Review } from "@/data/review_model";
import Link from "next/link";
import { Popover } from "antd";
import CopySection from "./copy_section";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { updateReview } from "@/data/review_repo";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import TipSection from "./tip_section";

const actionsClassNames = "flex border p-1 px-2 m-2 rounded-lg items-center text-secondary border-secondary shadow-2xl hover:text-tertiary";

const ReviewItem = ({review}:{review: Review})=>{
    const { publicKey, sendTransaction } = useWallet();
    const [errorMessage, setErrorMessage] = useState("");
    const { connection } = useConnection();
    // const [review, setReview] = useState<Review>(revieew);

    const onHelpfulClicked = async()=>{
        if (!publicKey) {
            setErrorMessage("You need to connect your wallet!");
            return;
        }

        try {
            const newReview = {
                ...review,
                likes: review.likes + 1
            };
            await updateReview(newReview);

            // setReview(newReview);
        } catch (error) {
            console.log(error);
            
            setErrorMessage("Couldn't like this review! please try again");

            setTimeout(()=>{
                setErrorMessage("");
            },5000);
        }
    }

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
                <Popover content={(<TipSection review={review}/>)} trigger={["click","hover"]} title="Tip Reviewer">
                    <button className={actionsClassNames}>
                        <PiTipJarFill className="mr-2"/>
                        {
                            review.tips 
                            ? (
                                <div>
                                    {review.tips} sol
                                </div>
                            )
                            : (
                                <span>
                                    Tip
                                </span>
                            )
                        }
                        
                    </button>
                </Popover>

                <Popover content={(<CopySection text={window.location.href} />)} trigger={["click", "hover"]} title="Copy link">
                    <button className={actionsClassNames}>
                        <FaShare  className="mr-2"/>
                        Share
                    </button>
                </Popover>
            </div>
            <div className="text-red-600 py-1">
                {errorMessage}
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