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
            <div className="flex px-4 py-6 flex-col gap-6 w-2/5 bg-(--card) border border-(--border) rounded">
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
                        {error && <p className="text-[--danger] text-sm mt-2">{error}</p>}

                        {/* DISPLAY SUCCESS MESSAGE */}
                        {message && <p className="text-[--success] text-sm mt-2">{message}</p>}
                        
                        {/* SUBMIT */}
                        <div className="pt-4">
                            <button 
                                className="w-full py-2 px-4 bg-(--primary-action) text-foreground font-bold rounded cursor-pointer hover:bg-(--primary-hover)" 
                                onClick={submit}
                            >
                                Let&apos;s get started!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}