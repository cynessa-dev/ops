'use client';

import { useRef } from "react";
import Button from "@/components/ui/Button";
import GoodsEntryForm from "@/components/ui/GoodsEntryForm";

type SlideOverProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SlideOver({ isOpen, onClose }: SlideOverProps) {
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
                <GoodsEntryForm ref={formRef} />

                <div className="flex gap-4 mt-4">
                    <Button type="button" label="Cancel" accent="danger" action={ onClose } />
                    <Button type="button" label="Submit" action={ handleSubmit } />
                </div>
            </div>
        </>
    );
}