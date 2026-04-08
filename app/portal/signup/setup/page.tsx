'use client';

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { useSetup } from "@/lib/hooks/useSetup";
import { useNavigation } from "@/lib/hooks/useNavigation";
import Select from "@/components/ui/Select";

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
    const { goToContractor } = useNavigation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        const success = await submit(e);
        if (success) {
            goToContractor();
        }
    };

    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <div className="flex px-4 py-6 flex-col gap-6 w-2/5 bg-card border border-border rounded">
                <div>
                    <h1 className="text-heading text-[1.5rem] font-bold">Introduce Yourself!</h1>
                    <p className="text-secondary text-[1.0rem] font-light">Let&apos;s get to know more about you.</p>
                </div>
                <div>
                    <form method="POST" onSubmit={ handleSubmit }>
                        <div className="flex flex-col gap-y-4 w-full">
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
                            <Select 
                                value={ role }
                                onChange={ setRole }
                                options={[
                                    { value: "invalid", label: "Set up as..." },
                                    { value: "client", label: "Client" },
                                    { value: "contractor", label: "Contractor" }
                                ]}
                            />
                        </div>

                        {/* SUBMIT */}
                        <Button label="I&apos;m Ready!" type="submit" />
                    </form>
                </div>
            </div>
        </main>
    );
}