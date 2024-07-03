import { Review } from "@/data/review_model";
import { ReviewContext } from "@/providers/review_provider";
import { useContext, useEffect } from "react"
import ReviewItem from "./review_item"

const ReviewSection = ({projectId} : {projectId: string})=>{
    const reviewContext = useContext(ReviewContext);
    const reviews: Review[] | null | undefined = reviewContext?.reviews;

    useEffect(()=>{
        reviewContext?.fetchReviews(projectId);
    },[]);

    return (
        <div>
            
            {
                !reviews 
                ?
                (
                    <div>Loading...</div>
                )
                : reviews!.length == 0 
                ? (
                    <div className="flex justify-center pt-5">
                        No Reviews Yet!
                    </div>
                )
                : reviews!.map((value,index)=>(
                    <div key={index}>
                        <ReviewItem
                            review={value} />
                    </div>
                ))
                
            }
        </div>
    )
}


export default ReviewSection