import { useState } from "react";
import { IoCopy } from "react-icons/io5";

const CopySection = ({text}:{text: string})=>{
    const [hasCopied, setHasCopied] = useState(false);
    const copyUrl = ()=>{
        navigator.clipboard.writeText(text);

        setHasCopied(true)

        setTimeout(()=>{
            setHasCopied(false)
        }, 5000)
    }


    return (
        <div className="flex justify-between items-center">
            <div className="w-full border rounded-lg mr-1 p-2 bg-gray-200">
                {text}
            </div>
            {
                hasCopied 
                ? (
                    <span className="font-bold text-lg">Copied</span>
                )
                : (
                    <button onClick = { copyUrl }>
                            <IoCopy size = { 24 }/>
                    </button>
                )
            }
        </div>
    )
}
export default CopySection