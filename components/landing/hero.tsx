import Button from "@/components/button";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center min-w-full min-h-screen">
            <div id="header" className="flex flex-col gap-4 w-4/5 text-center">
                <h1 className="text-(--heading) text-[5rem] font-bold leading-tight tracking-tight">Operate with Ease</h1>
                <h2 className="text-(--secondary) text-[1.25rem]">Simplify your operations with our intuitive platform.</h2>
            </div>
            <div id="actions" className="mt-16 w-1/5 flex gap-4">
                <Button text="Get Started" variant="primary" destination="/portal" />
            </div>
        </section>
    );
}