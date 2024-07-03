'use client';

import Link from 'next/link';
// import { motion } from 'framer-motion';
import WalletButton from "./wallet_button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchField from './search_field';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  var path = usePathname();


  return (
    <div className='md:sticky fixed top-0 md:left-0 md:right-0 left-2 right-2 bg-inherit flex justify-center'>
      <nav className="h-14 container flex md:flex-row flex-wrap items-center justify-between bg-inherit pt-2 md:pt-0">
            <Link
              className="text-xl font-bold leading-relaxed flex items-center uppercase text-primary hover:text-white"
              href="/">
              Belp
            </Link>
            <div className='md:block hidden w-2/5'>
              <SearchField />
            </div>
            <WalletButton />
            <div className='md:hidden w-full'>
              <SearchField />
            </div>
            
      </nav>
    </div>
  );
}
