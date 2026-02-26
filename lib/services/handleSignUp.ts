import { supabase } from "@/lib/supabase/client";
import { 
    validatePasswordLength, 
    validatePassword, 
    validateConfirmPassword,
    validateWhitespace
} from "@/lib/validator/validatePassword";

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
    if (!validateWhitespace(password)) {
        return { error: "Password must not contain whitespace" };
    }
    
    if (!validatePasswordLength(password)) {
        return { error: "Password must be at least 8 characters long" };
    }
    
    if (!validatePassword(password)) {
        return { error: "Password must contain at least one digit" };
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
        return { error: "Passwords do not match" };
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