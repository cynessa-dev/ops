export const getGreeting = () => {
    const hour = new Date().getHours(); // 0 - 23

    // Returns the greeting based on the current time of the user
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
        
    return "Good Evening";
}