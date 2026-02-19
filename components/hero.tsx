export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center min-w-full min-h-screen">
            <div id="header" className="flex flex-col gap-4 w-4/5 text-center">
                <h1 className="text-(--heading) text-[5rem] font-bold leading-tight tracking-tight">Tagline goes here</h1>
                <h2 className="text-(--secondary) text-[1.25rem]">Description goes here</h2>
            </div>
            <div id="actions" className="mt-16 flex gap-4">
                <button className="font-semibold bg-(--primary-action) px-6 py-2 rounded cursor-pointer hover:bg-(--primary-hover)">Get Started</button>
                <button className="font-semibold text-(--border) px-6 py-2 border-2 border-(--border) rounded cursor-pointer">Documentation</button>
            </div>
        </section>
    );
}