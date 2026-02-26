import { useCallback, useState } from "react";
import { handleSignUp } from "@/lib/services/handleSignUp";


export function useSignUp() {
    // User credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Message to display for the user
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const submit = useCallback(
        async (e?: React.SyntheticEvent) => {
            e?.preventDefault(); // Prevent form from refreshing the page

            // Reset messages
            setMessage(null);
            setError(null);

            // Handle the sign up process to send the credentials to Supabase and get the response
            const { message, error } = await handleSignUp(email, password, confirmPassword);
            if (error) {
                setError(error);
            } else {
                setMessage(message ?? null);
            }
        },
        [email, password, confirmPassword]
    );

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        message,
        error,
        submit,
    };
}