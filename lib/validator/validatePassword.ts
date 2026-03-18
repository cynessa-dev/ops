type ValidatorResponse = {
    success: boolean;
    message: string;
};

export async function validatePassword(
    password: string, 
    confirmPassword: string
): Promise<ValidatorResponse> {

    // Determine if user is sure of password
    if (!validateConfirmPassword(password, confirmPassword)) {
        return {
            success: false,
            message: "Password do not match Confirm Password."
        };
    }

    // Ensure complexity while maintaining memorability
    if (!validateLength(password)) {
        return {
            success: false,
            message: "Password must at least be 8 characters long."
        };
    }

    // Ensure no whitespaces before and after the password to avoid confusions
    if (!validateWhitespaces(password)) {
        return {
            success: false,
            message: "No spaces are allowed before or after the password."
        };
    }

    // Ensure users use only allowed characters to avoid injections
    if (!validateCharacters(password)) {
        return {
            success: false,
            message: "Password may only contain letters, numbers, and symbols(!@#-_:?)"
        };
    }

    return {
        success: true,
        message: "Password is valid :)"
    };
}

// HELPER FUNCTIONS

function validateConfirmPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}

function validateLength(password: string): boolean {
    return password.length >= 8;
}

function validateWhitespaces(password: string): boolean {
    const REGEX = /^\S+\s*\S+$/;

    return REGEX.test(password);
}

function validateCharacters(password: string): boolean {
    const REGEX = /^[a-zA-Z\d\s\!\@\#\-\_\:\?]+$/;
    
    return REGEX.test(password);
}