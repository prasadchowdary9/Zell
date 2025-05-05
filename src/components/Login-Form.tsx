"use client"; // Needed for useRouter to work in a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent default form behavior

        // Here you can validate or send login request if needed.
        // For now, we redirect for any input
        router.push("/dashboard"); // redirect to dashboard
    };

    return (
        <form
            className={cn("flex flex-col gap-6", className)}
            {...props}
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    Email
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        Password
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </form>
    );
}
