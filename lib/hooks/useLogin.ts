import React, { useState } from "react";
import { handleLogin } from "../services/handleLogin";

export function useLogin() {
    // User Crednetials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Feedback State
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submit = async (e: React.SyntheticEvent) => {
        e.preventDefault(); // Prevent form from refreshing the page

        // reset any previous state before trying again
        setError(null);
        setMessage(null);

        const { error, message } = await handleLogin(email, password);

        if (error) {
            setError(error);
        } else {
            // successful login – make sure the error state is clear
            setError(null);
            setMessage(message ?? null);
        }
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