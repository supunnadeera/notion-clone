//Navbar
"use client";

import { useIsScrolled } from "@/hooks/is-scrolled";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();

    const { isTop } = useIsScrolled();
    return (
        <div className={cn("w-full dark:bg-[#1f1f1f] flex p-6 top-0 fixed bg-background", isTop && " border-b shadow-sm")}>
            <Logo />
            <div className=" flex justify-between md:justify-end w-full text-muted-foreground items-center">
                {isLoading && (<p className="text-sm"><Spinner />
                </p>)}
                {
                    !isLoading && !isAuthenticated && (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm">
                                    Login
                                </Button>
                            </SignInButton>
                            <SignInButton mode="modal">
                                <Button size="sm" className=" hidden md:block">
                                    Get Jotion Free
                                </Button>
                            </SignInButton>
                        </>
                    )
                }
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button variant="ghost" size="sm">
                                <Link href="/documents">
                                    Enter Jotion
                                </Link>
                            </Button>
                            <UserButton afterSignOutUrl="/"/>
                        </>
                    )
                }
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar;