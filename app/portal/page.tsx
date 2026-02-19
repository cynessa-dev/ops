import Button from "@/components/button";
import InputField from "@/components/inputField";
import Navigation from "@/components/navigation";

export default function Portal() {
    return (
        <main className="flex justify-center items-center min-w-screen min-h-screen">
            <Navigation />
            <div className="flex px-4 py-6 flex-col gap-6 w-2/5 bg-(--card) border border-(--border) rounded">
                <div>
                    <h1 className="text-(--heading) text-[1.5rem] font-bold">Login</h1>
                    <p className="text-(--secondary) text-[1.25rem) font-light">Welcome back!</p>
                </div>
                <div>
                    <form action="#" method="post">
                        {/* EMAIL */}
                        <InputField label="Email" type="email" placeholder="Enter your email" />
                        {/* PASSWORD */}
                        <InputField label="Password" type="password" placeholder="Enter your password" />
                        
                        {/* SUBMIT */}
                        <div className="pt-4">
                            <Button text="Login" variant="primary" destination="/dashboard" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}