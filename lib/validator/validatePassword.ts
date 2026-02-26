export function validatePassword(password: string): boolean {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter
    const passwordRegex = /^(?=.*\d).{8,}$/;
    
    return passwordRegex.test(password);
}

export function validateConfirmPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}

export function validatePasswordLength(password: string): boolean {
    return password.length >= 8;
}

export function validateWhitespace(password: string): boolean {
    return !/\s/.test(password);
}