import { searchForProject } from "@/data/product_repo";
import { useState } from "react";

const SearchField = ()=>{
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = (query: string) => {
        const trimmedQuery = query.trim();
        if(trimmedQuery){
            setIsSearching(true);

            try {
                searchForProject(trimmedQuery);
            } catch (error) {
                console.log(error);
            }
            
        }else{
            setIsSearching(false);
        }

        console.log(query);
      }

    return (
        <div className="w-2/5  bg-inherit">
            <input 
                className='w-full h-10 border p-1 rounded-lg' 
                placeholder='Search a blockchain project'
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}/>    
            {
                isSearching && (
                    <div className="absolute mt-2 bg-inherit p-1">
                        Search Result here
                    </div>
                )
            }
        </div>
    )
}

export default SearchField