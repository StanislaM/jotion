"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import Link from "next/link";

type Props = {};

const NavBar = ({}: Props) => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <div
            className={cn(
                "fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]",
                scrolled && "border-b shadow-sm",
            )}
        >
            <Logo />

            <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
                {isLoading && <Spinner />}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </SignInButton>

                        <SignInButton mode="modal">
                            <Button size="sm">Get Jotion FREE</Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm">
                            <Link href="/documents">Enter Jotion</Link>
                        </Button>
                        <UserButton afterSignOutUrl="/" />
                    </>
                )}

                <ModeToggle />
            </div>
        </div>
    );
};

export default NavBar;
