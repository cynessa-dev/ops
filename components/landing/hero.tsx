'use client';

import { useNavigation } from '@/lib/hooks/useNavigation';

export default function Hero() {

    const { goToSignUp } = useNavigation();

    return (
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-background">
            
            {/* LEFT CONTAINER */}
            <div className="flex flex-col justify-center gap-4 px-8 py-16 lg:px-16">
                <div className="flex flex-col gap-4 select-none">
                    <h1 className="text-[3rem] font-bold">
                        Track what moves. Control what <span className="text-primary-default font-black">matters.</span>
                    </h1>
                    <p className="text-muted text-[1.25rem] font-light tracking-[0.05rem]">
                        Ops gives businesses a centralized, efficient way to record goods flowing in and out — through smart, customizable forms built for real operations.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex gap-8 mt-2">
                    <button
                        onClick={ goToSignUp }
                        className="
                            px-6 
                            py-3 
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
                            hover:-translate-y-2 
                            hover:rotate-2"
                    >
                        Get Started!
                    </button>
                    
                    <button
                        className="btn-underline relative px-6 py-3 font-semibold cursor-pointer"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}