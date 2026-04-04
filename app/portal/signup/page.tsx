'use client';
import Link from "next/link";

import { useSignUp } from "@/lib/hooks/useSignUp";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

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
            <div className="flex px-6 py-8 flex-col gap-6 w-2/5 bg-card border border-border rounded">
                <div>
                    <h1 className="text-(--heading) text-[1.5rem] font-bold">Sign Up</h1>
                    <p className="text-(--secondary) text-[1.0rem] font-light">Let&apos;s get you setup!</p>
                </div>
                <div>
                    <form method="post">
                        <div className="flex flex-col gap-y-4 w-full">
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
                        </div>
                        
                        {/* DISPLAY ERROR MESSAGE */}
                        {error && <p className="text-danger text-sm mt-2">{error}</p>}

                        {/* DISPLAY SUCCESS MESSAGE */}
                        {message && <p className="text-success text-sm mt-2">{message}</p>}
                        
                        {/* SUBMIT */}
                        <Button type="submit" label="Sign Me Up!" action={ submit } />

                        {/* SWITCH TO LOGIN */}
                        <div className="mt-6 text-center">
                            <Link 
                                href="/portal/login" 
                                className="text-secondary hover:text-foreground"
                            >
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}