//Navbar
"use client";

import { useIsScrolled } from "@/hooks/is-scrolled";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
    const { isTop } = useIsScrolled();
    return (
        <div className={cn("w-full dark:bg-[#1f1f1f] flex p-6 top-0 fixed bg-background", isTop && " border-b shadow-sm")}>
            <Logo />
            <div className=" flex justify-between md:justify-end w-full text-muted-foreground items-center">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar;