'use client';

import styles from './Hero.module.css';

export default function HeroFormPreview() {
    return (
        <div className={`${styles.formPreview} relative w-full max-w-sm mx-auto select-none`}>
            <div className="absolute -inset-6 rounded-3xl bg-primary-action/8 blur-2xl" />

            <div className="relative rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-action">
                            <span className="material-symbols-rounded text-white" style={{ fontSize: 14 }}>
                                package_2
                            </span>
                        </div>
                        <span className="text-sm font-bold text-heading">New Inbound Entry</span>
                    </div>
                    <span className="rounded-full bg-accent-surface px-2.5 py-0.5 text-xs font-semibold text-accent-action">
                        ↓ Inbound
                    </span>
                </div>

                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">
                            Goods Name <span className="text-danger">*</span>
                        </label>
                        <div className="flex items-center gap-2 rounded-xl border border-primary-action/40 bg-background px-3.5 py-2.5 ring-2 ring-primary-action/15">
                            <span className="text-sm text-foreground font-medium">Raw Steel Coils</span>
                            <span className="ml-auto h-4 w-0.5 bg-primary-action animate-pulse" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Qty</label>
                            <div className="rounded-xl border border-border bg-background px-3.5 py-2.5">
                                <span className="text-sm text-foreground">120</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted">Unit</label>
                            <div className="rounded-xl border border-border bg-background px-3.5 py-2.5">
                                <span className="text-sm text-foreground">kg</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted">Remarks</label>
                        <div className="rounded-xl border border-border bg-background px-3.5 py-2.5">
                            <span className="text-sm text-muted">Add any relevant notes here...</span>
                        </div>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="flex gap-3">
                        <div className="flex-1 rounded-xl border border-border py-2.5 text-center text-sm font-semibold text-muted">
                            Cancel
                        </div>
                        <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary-action py-2.5 text-sm font-semibold text-white">
                            <span className="material-symbols-rounded" style={{ fontSize: 15 }}>
                                upload_file
                            </span>
                            Submit
                        </div>
                    </div>
                </div>
            </div>

            <div className={`absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-success/30 bg-card px-3.5 py-2.5 shadow-card ${styles.badgeFloat}`}>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/12">
                    <span className="material-symbols-rounded text-success" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                    </span>
                </div>
                <div>
                    <p className="text-xs font-bold text-heading">TXN-0041 Approved</p>
                    <p className="text-xs text-muted">Just now</p>
                </div>
            </div>

            <div className={`absolute -top-3 -right-3 rounded-lg border border-border bg-card px-3 py-1.5 shadow-card ${styles.refFloat}`}>
                <span className="font-mono text-xs font-semibold text-primary-action">TXN-0042</span>
            </div>
        </div>
    );
}
