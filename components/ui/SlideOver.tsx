'use client';

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import GoodsEntryForm from "@/components/ui/GoodsEntryForm";
import Select from "@/components/ui/Select";

type SlideOverProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (items: Record<string, unknown>[], method: "inbound" | "outbound") => void;
};

export default function SlideOver({ isOpen, onClose, onSubmit }: SlideOverProps) {
    const [method, setMethod] = useState<"inbound" | "outbound">("inbound");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
        formRef.current?.requestSubmit();
    };
    return (
        <>
            {/* BACKDROP BLUR */}
            <div 
                onClick={ onClose }
                className={`
                    fixed inset-0 
                    bg-black/30 
                    overflow-hidden 
                    backdrop-blur-sm 
                    transition-opacity 
                    duration-300 
                    z-40
                    ${ isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" }
                `}
            />

            {/* SLIDE OVER CONTENT */}
            <div 
                className={`
                    fixed
                    top-0
                    right-0
                    p-6
                    h-full
                    w-2/3
                    max-w-3xl
                    bg-card
                    shadow-lg
                    transform
                    transition-transform
                    duration-300
                    z-50
                    overflow-y-auto
                    ${ isOpen ? "translate-x-0" : "translate-x-full" }
                `}
            >
                <div className="mb-4">
                    <Select 
                        value={method}
                        onChange={(value) => setMethod(value as "inbound" | "outbound")}
                        options={[
                            { value: "inbound", label: "Inbound" },
                            { value: "outbound", label: "Outbound" }
                        ]}
                    />
                </div>

                <GoodsEntryForm ref={formRef} method={method} onSubmit={onSubmit} showSubmitButton={false} />

                <div className="flex gap-4 mt-4">
                    <Button type="button" label="Cancel" accent="danger" action={ onClose } />
                    <Button type="button" label="Submit" action={ handleSubmit } />
                </div>
            </div>
        </>
    );
}