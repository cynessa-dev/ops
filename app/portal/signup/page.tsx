'use client';

import { useSignUp } from "@/lib/hooks/useSignUp";

import InputField from "@/components/inputField";
import Navigation from "@/components/navigation";

export default function Signup() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        message,
        error,
        submit,
    } = useSignUp();


    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <Navigation />
            <div className="flex px-6 py-8 flex-col gap-6 w-2/5 bg-card border border-border rounded">
                <div>
                    <h1 className="text-(--heading) text-[1.5rem] font-bold">Sign Up</h1>
                    <p className="text-(--secondary) text-[1.0rem] font-light">Let&apos;s get you setup!</p>
                </div>
                <div>
                    <form method="post">
                        {/* EMAIL */}
                        <InputField 
                            label="Email" 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* PASSWORD */}
                        <InputField 
                            label="Password" 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* CONFIRM PASSWORD */}
                        <InputField 
                            label="Confirm Password" 
                            type="password" 
                            placeholder="Confirm your password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {/* DISPLAY ERROR MESSAGE */}
                        {error && <p className="text-danger text-sm mt-2">{error}</p>}

                        {/* DISPLAY SUCCESS MESSAGE */}
                        {message && <p className="text-success text-sm mt-2">{message}</p>}
                        
                        {/* SUBMIT */}
                        <button
                            className="
                                mt-4 
                                px-6 
                                py-3 
                                w-full 
                                bg-primary-action 
                                font-semibold 
                                rounded-md 
                                shadow-lg 
                                shadow-primary-action/30 
                                cursor-pointer 
                                transition-color 
                                duration-150 
                                ease-in-out 
                                active:translate-y-0 
                                active:rotate-0 
                                hover:bg-primary-hover 
                                hover:shadow-xl
                            "
                        >
                            Sign Me Up!
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}