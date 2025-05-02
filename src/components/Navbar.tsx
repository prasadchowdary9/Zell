"use client";

import { BellIcon, LogOut, Moon, Settings, Sun, User, Wifi } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [heading, setHeading] = useState(
    "Bussiness Name"
  );

  return (
    <nav className="p-4 flex items-center justify-between border-b shadow-sm bg-primary-foreground h-22">
      {/* Left: Sidebar + Business Info */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        {/* Dummy Business Name + Online Icon */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium">
            <Wifi className="w-4 h-4" />
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          </div>

        </div>
      </div>

      {/* Center: Dynamic Heading */}
      <div className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">
        {heading}
      </div>

      {/* Right: Theme, Notifications, Profile */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        {/* Theme Toggle */}
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

        {/* Notifications */}
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

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <LogOut className="h-[1.2rem] w-[1.2rem] mr-2 text-red-500" />
                  <span className="text-red-500">Logout</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to logout?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will end your current session.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Logout</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
