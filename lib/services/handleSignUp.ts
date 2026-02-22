import { supabase } from "@/lib/database/supabase";
import { validatePassword } from "@/lib/validator/validatePassword";

type SignUpResponse = {
    message?: string;
    error?: string;
};

export async function handleSignUp(
    email: string, 
    password: string, 
    confirmPassword: string
): Promise<SignUpResponse> {
    // Validate the password to avoid weak passwords and mismatched confirm password
    if (!validatePassword(password, confirmPassword)) {
        return { error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number." };
    }
    
    // Call Supabase to verify sign up process
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    // Handle the response to display appropriate messages to the user
    if (error) {
        return { error: error.message };
    } else {
        return { message: "We have sent the confirmation email. Please check your inbox and click the link to verify your account." };
    }
}