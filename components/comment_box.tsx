import { supabaseReviewDB } from "@/supabase_config";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdAddComment } from "react-icons/md";

const CommentBox = (
        {setIsOpen,projectId}: 
        {
            projectId:  string,
            setIsOpen: (value: boolean)=>void
        }
    )=>{
    const [review, setReview] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");
    const { publicKey } = useWallet();

    const addReview = async ()=>{
        //validate input
        //if review is empty
        if(review.length < 10){
            setErrorText("Please enter a valid review");
            return;
        }
        //if walletAddress is not empty
        // console.log();
        
        if(!publicKey){
            setErrorText("You need to connect your wallet before you drop a review <br />Your wallet address is your identity!");
            return;
        }

        //add to db
        let reviewObject = {
            projectId: projectId,
            walletAddr: publicKey?.toString(),
            message: review,
            likes: 0,
            tips: 0,
            responses: {},
        };
        

        const { data, error } = await supabaseReviewDB
        .insert(reviewObject)
        .select()
        .single();
        
        if (error) {
            setErrorText(error.message);
            
            console.log(error);
            
        } else {
            setIsOpen(false);
            
            console.log(data);
        }
    }

    return (
        <div className="relative  flex flex-col items-center justify-center">
            <div className="flex justify-center">
                {errorText}
            </div>
            <br />
            <textarea name="review" onChange={(e)=>setReview(e.target.value)} cols={40} rows={4} placeholder="Drop your review here ..." className=" border p-1 rounded-lg"></textarea>
            <div>
                <button className="rounded-xl bg-secondary py-2 px-4 mt-3 border" onClick={()=>addReview()}>
                    POST
                </button>
            </div>
        </div>
    )
}

export const AddCommentButton = (
        {projectId}: {projectId: string}
    )=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-16 right-16 flex flex-col items-end">
            {
                isOpen && (
                    <div className="bg-primary p-3 border rounded-lg mr-10">
                        <CommentBox 
                            setIsOpen={setIsOpen}
                            projectId={projectId}/>
                    </div>
                )
            }
            <button onClick={()=>setIsOpen(!isOpen)} className={`bg-secondary hover:bg-primary hover:text-gray-400 text-white p-4 rounded-full shadow-2xl`}>
                {isOpen ?(
                    <div>
                        <IoMdClose size={30} />
                    </div>
                ) :
                (
                    <div>
                        <MdAddComment size={30}/>
                    </div>
                )}
            </button>
        </div>
    )
}



export default CommentBox