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