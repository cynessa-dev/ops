export function validatePassword(password: string, confirmPassword: string): boolean {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        return false;
    }

    if (password !== confirmPassword) {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    return true;
}