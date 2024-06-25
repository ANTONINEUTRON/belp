// import { AddressContext } from "@/context/address_context";
// import { useEffect } from "react";
// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { connectWallet } from "@/utils/wallet_helpers";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function WalletButton(){
    return (
        <div className="border hover:border-slate-900 rounded">
            <WalletMultiButton style={{}} />
        </div>
    );
}