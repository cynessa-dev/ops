import React, { useState } from "react";
import { handleLogin } from "@/lib/services/handleLogin";

export function useLogin() {
    // User Crednetials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Feedback State
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const submit = async (e: React.SyntheticEvent) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // reset any previous state before trying again
        setError(null);
        setMessage(null);

        const { error, message } = await handleLogin(email, password);

        if (error) {
            setError(error);

            return false;
        }

        // successful login: make sure the error state is clear
        setError(null);
        setMessage(message ?? null);

         return true;
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        message,
        error,
        submit
    };
}