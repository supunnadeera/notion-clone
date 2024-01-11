//Headings
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, icons } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";


const Headings = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    
    return (
      
        <div className="max-w-3xl space-y-4">
        <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
          Your Ideas, Documents & Plans. Unified Welcome to{" "}
          <span className="underline">Jotion</span>
        </h1>
        <p className=" text-base sm:text-xl md:text-2xl font-medium">
          Jotion is a connected workspace where<br></br> better, faster work
          happens
        </p>
        {
          isLoading && (
            <div className="w-full flex justify-center items-center">
              <Spinner size="icon" />
            </div>
          )
        }
        {
          !isLoading && !isAuthenticated && (
            <SignInButton mode="modal">
                <Button>
                    Get Jotion Free
                </Button>
            </SignInButton>
 
          )
        }
        {
          isAuthenticated && !isLoading && (
            <Button>
              <Link href="/documents">
                  Enter Jotion
              </Link>
            </Button>
          )
        }

      </div>
    )
}

export default Headings;