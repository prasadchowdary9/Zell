import { LoginForm } from "@/components/Login-Form"
import { GalleryVerticalEnd } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Acme Inc.
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:block bg-primary-foreground">
                <div className="relative w-full h-screen">
                   
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-primary-foreground bg-opacity-60">
                        <h1 className="text-7xl font-black tracking-wide text-white drop-shadow-2xl">
                            AGRI <span className="text-green-500">[ONE]</span>
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
