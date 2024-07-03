import { Review } from "@/data/review_model";
import { updateReview } from "@/data/review_repo";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { InputNumber } from "antd";
import { FormEvent, useCallback, useState } from "react";
import LoadingUI from "./loading_ui";


const TipSection = ({review}:{review: Review})=>{
    const { publicKey, sendTransaction } = useWallet();
    const [errorMessage, setErrorMessage] = useState("");
    const { connection } = useConnection();
    const [tipAmount, setTipAmount] = useState(0.001);
    const [isProcessingTip,setIsProcessingTip] = useState(false);
    const [notice, setNotice] = useState("");

    const onTipsAdded = async (event: FormEvent) => {
        event.preventDefault();

        if (!publicKey) {
            setErrorMessage("Please connect your wallet!");
            return;
        }

        if(!tipAmount){
            setErrorMessage("Please the amount to be tipped can't be less than 0.001")
        }

        if (publicKey.toString() == review.walletAddr){
            setErrorMessage("You can't tip yourself");
        }

        try {
            setIsProcessingTip(true);

            // lamports is 1,000,000,000 * sols
            const lamports = tipAmount * LAMPORTS_PER_SOL;

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: new PublicKey(review.walletAddr),
                    lamports,
                })
            );

            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();

            const signature = await sendTransaction(transaction, connection, { minContextSlot });

            let respons = await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

            setNotice("You've tipped this review successfully");

            await updateReview({
                ...review,
                tips: tipAmount + review.tips,
            });
        } catch (error) {
            console.log(error);

            setErrorMessage("Transaction was interrupted, please try again");

        }
        
        setTimeout(()=>{
            setErrorMessage("");
            setNotice("");
        },10000)
    
        setIsProcessingTip(false);
    };

    
    return (
        <div className="w-46 flex flex-col justify-center">
            <span>
                {notice}
            </span>
            <span className="text-red-600 flex justify-center">
                {errorMessage}
            </span>
            <form onSubmit={(e)=>onTipsAdded(e)}>
                <InputNumber addonAfter="SOL" onChange={(e)=>setTipAmount(e ?? tipAmount)} defaultValue={tipAmount} width={70} min={0.001}/>
                {
                    isProcessingTip 
                    ? (
                        <div className=" flex justify-center h-6">
                            <div className="w-5 h-5">
                                <LoadingUI />
                            </div>
                        </div>
                    )
                    : (
                        <button type = "submit" className = "mt-3 w-full text-white bg-primary py-1 font-bold text-lg rounded-xl">
                            Send
                        </button>
                    )
                }
            </form>
        </div>
    )
}

export default TipSection