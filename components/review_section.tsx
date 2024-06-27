import { Review } from "@/data/review_model";
import { ReviewContext } from "@/providers/review_provider";
import { useContext, useEffect } from "react"
import ReviewItem from "./review_item"

const ReviewSection = ()=>{
    const reviewContext = useContext(ReviewContext);
    const reviews: Review[] | null | undefined = reviewContext?.reviews;

    useEffect(()=>{
        reviewContext?.fetchReviews("ID-1");
    },[]);

    return (
        <div>
            
            {
                !reviews 
                ?(
                    <div></div>
                )
                : 
                reviews!.map((value,index)=>(
                    <div>
                        <ReviewItem
                            review={value} />
                    </div>
                ))
                
            }
        </div>
    )
}


export default ReviewSection