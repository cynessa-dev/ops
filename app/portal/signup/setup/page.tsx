import InputField from "@/components/inputField";

export default function Setup() {
    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <div className="flex px-4 py-6 flex-col gap-6 w-2/5 bg-(--card) border border-(--border) rounded">
                <div>
                    <h1 className="text-(--heading) text-[1.5rem] font-bold">Introduce Yourself!</h1>
                    <p className="text-(--secondary) text-[1.0rem] font-light">Let's get to know more about you.</p>
                </div>
                <div>
                    <form method="post">
                        {/* FIRST NAME */}
                        <InputField 
                            label="First Name" 
                            type="text" 
                            placeholder="Enter your first name" 
                        />
                        {/* LAST NAME */}
                        <InputField 
                            label="Last Name" 
                            type="text" 
                            placeholder="Enter your last name" 
                        />
                        {/* ROLE */}
                        <select className="w-full px-3 py-2 bg-(--card) border border-(--border) rounded mt-4 focus:outline-none focus:ring focus:ring-(--secondary)">
                            <option value="">Select your role</option>
                            <option value="client">Client</option>
                            <option value="contractor">Contractor</option>
                        </select>

                        {/* SUBMIT */}
                        <button 
                            type="submit" 
                            className="w-full mt-6 bg-(--primary-action) text-foreground py-2 rounded hover:bg-(--primary-hover) transition-colors"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}