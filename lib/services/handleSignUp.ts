import { supabase } from "@/lib/supabase/client";
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

    // Validate password to ensure security of both users and application
    const { success, message } = await validatePassword(password, confirmPassword)

    if (!success) {
        return { error: message };
    }
    
    // Call Supabase to verify sign up process
    const { error } = await supabase.auth.signUp({
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