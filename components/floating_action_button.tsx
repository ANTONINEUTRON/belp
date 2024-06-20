"use client"
import { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiRobot3Fill } from "react-icons/ri";


interface FloatingActionButtonProps{
    // children: ReactNode;
    // onClick?: ()=>void;
    // className?: string;{children, className}
}
const FloatingActionButton = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-16 right-16 flex flex-col items-end">
            {
                isOpen && (
                    <div className="bg-primary p-4 border md:mr-9 md:mb-2 rounded-lg">
                        Where the AI will be hoisted
                    </div>
                )
            }
            <button onClick={()=>setIsOpen(!isOpen)} className={`bg-secondary hover:text-gray-400 text-white p-4 rounded-full shadow-2xl`}>
                {isOpen ?(
                    <div>
                        <IoMdClose size={30} />
                    </div>
                ) :
                (
                    <div>
                        <RiRobot3Fill size={30}/>
                    </div>
                )}
            </button>
        </div>
    )
}

export default FloatingActionButton