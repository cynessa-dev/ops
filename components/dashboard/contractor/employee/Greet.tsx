import { getGreeting } from "@/lib/utility/getGreet";

type GreetProps = {
    name: string;
}

export default function Greet({ name }: GreetProps) {
    return (
        // Greets the user for a personalized dashboard
        <div className="my-8">
            <div className="mb-1">
                <h1 className="text-[1.5rem] font-bold">{ getGreeting() }, { name }!</h1>
            </div>
            <div>
                <p className="tracking-wide">Here&apos;s what&apos;s happening with your submission today.</p>
            </div>
        </div>
    );
}