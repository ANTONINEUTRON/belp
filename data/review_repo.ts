// Contains functions for fetching reviews

import { supabaseReviewDB } from "@/supabase_config";
import { Review } from "./review_model";

export const getReviewsFor = async(projectId: string): Promise<Review[]>=>{
    const { data, error } = await supabaseReviewDB
    .select()
    .eq("projectId", projectId)
    .order("id",{ascending: false});

    if(error){
        throw error;
    }else{
        return data;
    }
}

export const updateReview = async (review: Review)=>{
    const { error } = await supabaseReviewDB
        .update(review)
        .eq('id',review.id);

    if(error){
        throw error;
    }
}