'use client';

import { useRouter } from "next/navigation";

type ButtonProps = {
    text: string;
    variant?: "primary" | "secondary";
    action?: "button" | "submit" | "reset";
    destination?: string;
};

export default function Button({ text, variant, action = "button", destination }: ButtonProps) {
    const Router = useRouter();
    var bgColor = "";

    function handleClick() {
        if (destination) {
            Router.push(destination);

            return;
        }
    }

    switch (variant) {
        case "primary":
            bgColor = "bg-(--primary-action) hover:bg-(--primary-hover)";
            break;
        case "secondary":
            bgColor = "border border-(--secondary)";
            break;
    }

    return (
        <button 
            type={action} 
            onClick={handleClick} 
            className={`w-full px-4 py-2 ${bgColor} font-bold rounded cursor-pointer transition`}>
        {text}
        </button>
    );
}
