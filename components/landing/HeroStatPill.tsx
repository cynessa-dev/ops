'use client';

import styles from './Hero.module.css';

type HeroStatPillProps = {
    icon: string;
    value: string;
    label: string;
    delay: string;
};

export default function HeroStatPill({ icon, value, label, delay }: HeroStatPillProps) {
    return (
        <div
            className={`${styles.statPill} flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-4 py-3 shadow-card`}
            style={{ animationDelay: delay }}
        >
            <span className="material-symbols-rounded text-primary-action" style={{ fontSize: 20 }}>
                {icon}
            </span>
            <div>
                <p className="text-base font-bold text-heading leading-none">{value}</p>
                <p className="text-xs text-muted mt-0.5">{label}</p>
            </div>
        </div>
    );
}
