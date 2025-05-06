"use client";

import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NavbarPublic = () => {
    return (
        <nav className="p-4 flex items-center justify-between border-b shadow-sm bg-primary-foreground h-22">
            {/* Left: Brand Name */}
            <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    AGRI ONE
                </div>
            </div>

            {/* Right: Sign In / Sign Up Buttons */}
            <div className="flex items-center gap-4">
                <SignedOut>
                    <div className="flex gap-2">
                        <SignInButton mode="modal">
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button>Sign Up</Button>
                        </SignUpButton>
                    </div>
                </SignedOut>
            </div>
        </nav>
    );
};

export default NavbarPublic;
