'use client';

import { useNavigation } from '@/lib/hooks/useNavigation';
import HeroCanvas from './HeroCanvas';
import HeroFormPreview from './HeroFormPreview';
import HeroStatPill from './HeroStatPill';
import styles from './Hero.module.css';

export default function Hero() {
    const { goToSignUp } = useNavigation();

    return (
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-background">

            <div className={`${styles.gridFade} pointer-events-none`}>
                <HeroCanvas />
            </div>

            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-action/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent-action/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-center gap-6 px-8 py-24 lg:px-16">
                <div className={`${styles.heroTag} flex items-center gap-2 w-fit rounded-full border border-primary-action/30 bg-primary-surface px-4 py-1.5`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-action animate-pulse" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary-action">
                        Now in Early Access
                    </span>
                </div>

                <div className="flex flex-col gap-3 select-none">
                    <h1 className={`${styles.heroH1} text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-heading`}>
                        Track what moves.
                        <br />
                        Control what{' '}
                        <span className="relative inline-block text-primary-action font-black">
                            matters.
                            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                                <path d="M0,5 Q25,0 50,4 Q75,8 100,3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </span>
                    </h1>

                    <p className={`${styles.heroSub} text-muted text-lg font-light leading-relaxed tracking-wide max-w-md`}>
                        Ops gives businesses a centralized, efficient way to record goods flowing in and out — through smart, customizable forms built for real operations.
                    </p>
                </div>

                <div className={`${styles.heroCta} flex items-center gap-4 mt-1`}>
                    <button
                        onClick={goToSignUp}
                        className="group flex items-center gap-2 px-6 py-3 bg-primary-action text-white font-semibold rounded-xl shadow-lg hover:bg-primary-hover hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-150 ease-out"
                    >
                        Get Started
                        <span className="material-symbols-rounded transition-transform duration-150 group-hover:translate-x-0.5" style={{ fontSize: 18 }}>
                            arrow_forward
                        </span>
                    </button>

                    <button className="btn-underline relative px-5 py-3 font-semibold text-foreground cursor-pointer hover:text-primary-action transition-colors duration-150">
                        Learn More
                    </button>
                </div>

                <div className={`${styles.heroSocial} flex items-center gap-3 mt-2`}>
                    <div className="flex -space-x-2">
                        {['JC', 'MS', 'RR', 'AL'].map((initials, i) => (
                            <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-primary-surface text-[10px] font-bold text-primary-action">
                                {initials}
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted">
                        Trusted by <span className="font-semibold text-foreground">teams</span> managing real operations
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-1">
                    <HeroStatPill icon="upload_file" value="1,200+" label="Entries logged" delay="0.65s" />
                    <HeroStatPill icon="check" value="98%" label="Approval rate" delay="0.75s" />
                    <HeroStatPill icon="schedule" value="< 2 min" label="Avg. submit time" delay="0.85s" />
                </div>
            </div>

            <div className={`${styles.heroRight} relative z-10 hidden lg:flex items-center justify-center px-8 py-24`}>
                <HeroFormPreview />
            </div>
        </section>
    );
}
