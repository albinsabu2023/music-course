"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
     const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} item="Home " active={active}>
               <HoveredLink href="/albin">Hello</HoveredLink>
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} item="Explore " active={active}>
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#courses">courses</HoveredLink>
                    <HoveredLink href="#testimony">Testimony</HoveredLink>
                    <HoveredLink href="#contact">Contact</HoveredLink>
                    <HoveredLink href="#view">View more</HoveredLink>
                    
                 </div>
            </MenuItem>
            <Link href={"#contact"}>
                <MenuItem setActive={setActive} item="contact " active={active}>
               <HoveredLink href="/contact">Contact us</HoveredLink>
                </MenuItem>
            </Link>


        </Menu>
    </div>
  )
}

export default Navbar