import Button from "@/components/button";

export default function Hero() {
    return (
        <section className="min-w-full min-h-screen pt-32">
            <div id="header" className="flex flex-col gap-4 w-4/5 select-none">
                <h1 className="text-(--heading) text-[4rem] md:text-[5rem] xl:text-[6rem] font-black tracking-[-0.1rem]">OPERATE WITH EASE</h1>
                <p className="text-(--secondary) text-[2rem] leading-8 tracking-[0.1rem]">Work, collaborate, and communicate <br /> with the right tools, all in one place!</p>
            </div>
            <div id="actions" className="mt-16 w-1/5 flex gap-4">
                <button className="bg-(--primary-action) text-background px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-(--primary-hover)">LET'S GET STARTED</button>
            </div>
        </section>
    );
}