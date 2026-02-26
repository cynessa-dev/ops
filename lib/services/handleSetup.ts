import { supabase } from "@/lib/supabase/client";

export async function handleSetup(firstName: string, lastName: string, role: string) {
    // Get the current user to determine which profile to update
    // Also used to ensure that such a user exists before attempting to update the profile information
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: "No user found. Please log in again." };
    }

    // If there is a user, we can proceed to update the profile information in the database
    const { error } = await supabase
        .from('profiles')
        .update({
            first_name: firstName,
            last_name: lastName,
            role: role,
        })
        .eq('id', user.id); // Assuming the 'id' column in 'profiles' matches the user's ID

    if (error) {
        return { error: "Failed to update profile information." };
    } else {
        return { message: "Profile information updated successfully." };
    }
}