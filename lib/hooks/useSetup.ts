import { useState } from "react";

import { handleSetup } from "@/lib/services/handleSetup";

export function useSetup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    
    // Update process is separated into its own function to allow for better error handling and separation of concerns
    const submit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { error, message } = await handleSetup(firstName, lastName, role);

        if (error) {
            console.error("Error setting up profile:", error);
            return false;
        }

        if (message) {
            console.log("Profile setup successful:", message);
        }

        return true;
    };

    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        role,
        setRole,
        submit,
    };
}