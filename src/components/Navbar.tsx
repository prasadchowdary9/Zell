"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [heading] = useState("AGRI ONE");
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav className="p-4 flex items-center justify-between border-b shadow-sm bg-primary-foreground h-22">
      <div className="flex items-center gap-4">
        {!isHomePage && (
          <div className="text-xl font-semibold text-gray-800 dark:text-white">
            {heading}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isHomePage ? (
          <SignedOut>
            <div className="flex gap-2">
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button variant="outline">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal" forceRedirectUrl="/sign-in">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        ) : (
          <>
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                    <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <BellIcon className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>No notifications</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            <SignedOut>
              <div className="flex gap-2">
                <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal" forceRedirectUrl="/sign-in">
                  <Button>Sign Up</Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
