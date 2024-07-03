'use client';

import Link from 'next/link';
// import { motion } from 'framer-motion';
import WalletButton from "./wallet_button";
import { FaBars } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import SearchField from './search_field';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  var path = usePathname();


  return (
    <div className=' sticky top-0 left-0 right-0 bg-black flex justify-center'>
      <nav className="h-14 container flex items-center justify-between bg-inherit">
            <Link
              className="text-xl font-bold leading-relaxed flex items-center uppercase text-primary hover:text-white"
              href="/">
              Belp
            </Link>
            <SearchField />
            <WalletButton />
      </nav>
    </div>
  );
}
