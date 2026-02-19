'use client';

import { useRouter } from "next/navigation";

type ButtonProps = {
    text: string;
    variant: "primary" | "secondary";
    action?: "button" | "submit" | "reset";
    destination?: string;
};

export default function Button({ text, variant, action = "button", destination }: ButtonProps) {
    const router = useRouter();

    function handleClick() {
        if (destination) {
            router.push(destination);

            return;
        }
    }

    return (
        <button 
            type={action} 
            onClick={handleClick} 
            className="w-full px-4 py-2 bg-(--primary-action) font-bold rounded cursor-pointer hover:bg-(--primary-hover) transition">
        {text}
        </button>
    );
}
