import { searchForProject } from "@/data/project_repo";
import { SearchProfiles, SearchResult } from "@/data/project_model";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Modal } from "antd";

const SearchField = ()=>{
    const [isSearching, setIsSearching] = useState(false);
    const [query, setQuery] = useState("");
    const [queryResponse, setQueryResponse] = useState<SearchProfiles[] | null>()
    const [errorMsg, setErrorMsg] = useState<string>("")


    const handleSearch = async (event: FormEvent)=>{
        event.preventDefault();

        if(query.length > 2){
            setIsSearching(true);
            try {
                let results: SearchResult = await searchForProject(query.trim());

                setQueryResponse(results.profiles);
            } catch (error) {
                setErrorMsg("An error occurred while searching. Try again");
            }
        }
    }

    const resetSearchState =  ()=>{
        setIsSearching(false);
        setQuery("");
        setQueryResponse(null);
    }

    const popOverContent = (
        <div>
            {
                isSearching && (
                    queryResponse
                        ? (
                            <div className="mt-4 rounded-xl p-3 bg-inherit w-full">
                                {/* <div className="flex justify-end">
                                    <button onClick={() => resetSearchState()}>
                                        <IoClose className="text-secondary" size={40} />
                                    </button>
                                </div> */}
                                {
                                    queryResponse.map((result, index) => (
                                        <Link
                                            key={index}
                                            href={"/projects/" + result.id}
                                            onClick={() => resetSearchState()}>
                                            <div className="pt-3">
                                                {result.logo && (
                                                    <img
                                                        src={result.logo}
                                                        width={100}
                                                        height={100}
                                                        className="py-4" />
                                                )}

                                                <div className="font-bold text-lg">
                                                    {result.name}
                                                </div>
                                                <div className="line-clamp-2">
                                                    {result.description}
                                                </div>
                                                <hr className="my-2" />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                        : (
                            <div className="mt-2   p-3 w-full">
                                {
                                    errorMsg
                                        ? (
                                            <div className="text-lg flex flex-col items-center">
                                                {errorMsg}
                                            </div>
                                        )
                                        : isSearching ? (
                                            <div>
                                                Not found
                                            </div>
                                        ):(
                                            <div>
                                                Loading Search Result...
                                            </div>
                                        )
                                }
                            </div>
                        )
                )
            }
        </div>
    );

    return (
        <div className="w-full py-3 bg-inherit ">
            <div className="bg-inherit w-full border rounded-lg flex justify-between p-1 items-center">
                <div className="mx-2">
                    <FaSearch />
                </div>
                <form onSubmit={(e)=>{handleSearch(e)}} className="w-full flex">
                    <input 
                        className='w-full h-10 rounded-lg p-2' 
                        placeholder='Search a blockchain project'
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }} />
                    <button type="submit">
                    </button>
                </form> 
                <Modal title="Search result" open={isSearching} onCancel={()=>resetSearchState()} footer={<div></div>}>
                    {popOverContent}
                </Modal>
            </div>  
            
        </div>
    )
}

export default SearchField