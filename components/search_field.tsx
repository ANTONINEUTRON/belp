import { searchForProject } from "@/data/project_repo";
import { SearchProfiles, SearchResult } from "@/data/project_model";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SearchField = ()=>{
    const [isSearching, setIsSearching] = useState(false);
    const [query, setQuery] = useState("");
    const [queryResponse, setQueryResponse] = useState<SearchProfiles[] | null>()


    const handleSearch = async (event: FormEvent)=>{
        event.preventDefault();
        console.log("got in");
        

        if(query.length > 2){
            setIsSearching(true);
            try {
                let results: SearchResult = await searchForProject(query.trim());

                console.log("gottt in");
                console.log(results);

                setQueryResponse(results.profiles);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const resetSearchState =  ()=>{
        setIsSearching(false);
        setQuery("");
        setQueryResponse(null);
    }

    return (
        <div className="w-2/5  bg-inherit ">
            <div className="bg-inherit w-full border rounded-lg flex justify-between p-1 items-center">
                <form onSubmit={(e)=>{handleSearch(e)}} className="w-full flex">
                    <input 
                        className='w-full h-6' 
                        placeholder='Search a blockchain project'
                        // prefix={}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }} />
                    <button type="submit">
                    </button>
                </form> 
                
                <div>
                    <FaSearch />
                </div>
            </div>   
            {
                isSearching && (
                    queryResponse
                        ? (
                            <div className="absolute mt-4 rounded-xl p-3 bg-inherit w-2/5">
                                <div className="flex justify-end">
                                    <button onClick={()=>resetSearchState()}>
                                        <IoClose className="text-secondary" size={40}/>
                                    </button>
                                </div> 
                                {
                                    queryResponse.map((result,index)=>(
                                        <Link href={"/projects/"+result.id} onClick={()=>resetSearchState()}>
                                            <div className="pt-3">
                                                {result.logo && (
                                                    <img 
                                                        src={result.logo}
                                                        width={100}
                                                        height={100}
                                                        className="py-4"/>
                                                )}
                                                
                                                <div className="font-bold text-lg">
                                                    {result.name}
                                                </div>
                                                <div className="line-clamp-2">
                                                    {result.description}
                                                </div>
                                                <hr className="my-2"/>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                        : (
                            <div className="absolute mt-2 bg-primary rounded-xl p-3 w-2/5">
                                Loading Search Result
                            </div>
                        )
                )
                
                    
            }
        </div>
    )
}

export default SearchField