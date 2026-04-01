'use client';

import Link from "next/link";

import { useLogin } from "@/lib/hooks/useLogin";
import { useNavigation } from "@/lib/hooks/useNavigation";

import Button from "@/components/ui/button";
import InputField from "@/components/ui/inputField";

export default function Login() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        message,
        error,
        submit,
    } = useLogin();
    const { goToContractor } = useNavigation();

    const handleLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        const success = await submit(e);
        if (success) {
            goToContractor();
        }
    }

    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <div className="flex px-6 py-8 flex-col gap-6 w-2/5 bg-card border border-border rounded">
                <div>
                    <h1 className="text-heading text-[1.5rem] font-bold">Login</h1>
                    <p className="text-secondary text-[1.0rem] font-light">Welcome back!</p>
                </div>
                <div>
                    <form onSubmit={ handleLogin }>
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

                        {/* DISPLAY ERROR MESSAGE */}
                        {error && <p className="text-danger text-sm mt-2">{error}</p>}

                        {/* DISPLAY SUCCESS MESSAGE */}
                        {message && <p className="text-success text-sm mt-2">{message}</p>}
                        
                        {/* SUBMIT */}
                        <Button type="submit" label="Let's Get Started!" />
                    
                        {/* SWITCH TO LOGIN */}
                        <div className="mt-6 text-center">
                            <Link 
                                href="/portal/signup" 
                                className="text-secondary hover:text-foreground"
                            >
                                Don&apos;t have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}