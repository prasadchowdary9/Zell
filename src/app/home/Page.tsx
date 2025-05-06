"use client"
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col w-full">
            {/* Hero Section */}
            <div className="flex-1 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold mb-4">Welcome to Agri One</h1>
                    {/* Button to redirect to dashboard */}
                    <button
                        className="button-outline-primary px-6 py-2 text-white border border-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all"
                        onClick={() => router.push('/dashboard')}>
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}