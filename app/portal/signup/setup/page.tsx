"use client";

import InputField from "@/components/inputField";
import { useSetup } from "@/lib/hooks/useSetup";
import { useNavigation } from "@/lib/hooks/useNavigation";

export default function Setup() {
    const {
        firstName, 
        setFirstName, 
        lastName, 
        setLastName, 
        role, 
        setRole, 
        submit 
    } = useSetup();
    const { goToManager } = useNavigation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        const success = await submit(e);
        if (success) {
            goToManager();
        }
    };

    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <div className="flex px-4 py-6 flex-col gap-6 w-2/5 bg-(--card) border border-(--border) rounded">
                <div>
                    <h1 className="text-(--heading) text-[1.5rem] font-bold">Introduce Yourself!</h1>
                    <p className="text-(--secondary) text-[1.0rem] font-light">Let&apos;s get to know more about you.</p>
                </div>
                <div>
                    <form method="post">
                        {/* FIRST NAME */}
                        <InputField 
                            label="First Name" 
                            type="text" 
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {/* LAST NAME */}
                        <InputField 
                            label="Last Name" 
                            type="text" 
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {/* ROLE */}
                        <select 
                            className="w-full px-3 py-2 bg-(--card) border border-(--border) rounded mt-4 focus:outline-none focus:ring focus:ring-(--secondary)"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select your role</option>
                            <option value="client">Client</option>
                            <option value="contractor">Contractor</option>
                        </select>

                        {/* SUBMIT */}
                        <button 
                            className="w-full mt-6 bg-(--primary-action) text-foreground py-2 rounded cursor-pointer hover:bg-(--primary-hover) transition-colors"
                            onClick={handleSubmit}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}