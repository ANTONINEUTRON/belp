import { Review } from "@/data/review_model";
import { getReviewsFor } from "@/data/review_repo";
import { createContext, ReactNode, useState } from "react";

interface ReviewContextProps{
    reviews: Review[] | null;
    errorMessage: string;
    // setReviews: (reviews: Review[])=>void;
    // setErrorMessage: (errorMsg: string)=>void;
    fetchReviews: ((id:string)=>void);
}

export const ReviewContext = createContext<ReviewContextProps | null>(null);

const ReviewProvider = ({children}: {children: ReactNode})=>{

    const fetchReviews = async (id: string) => {
        try{
            let fetchedReviews = await getReviewsFor(id);
            
            setReviewsState({
                ...reviewsState,
                reviews:fetchedReviews,
            });
        }catch(error){
            console.log(error);
        }
    }

    const [reviewsState, setReviewsState] = useState<ReviewContextProps>({
        reviews: null,
        errorMessage: "",
        fetchReviews: fetchReviews,
    });


    return (
        <ReviewContext.Provider value={reviewsState}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider