export default function Hero() {
    return (
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-background">
            
            {/* LEFT CONTAINER */}
            <div className="flex flex-col justify-center gap-4 px-8 py-16 lg:px-16">
                <h1 className="text-[3rem] font-bold">
                    Track what moves. Control what matters.
                </h1>
                <p className="text-muted text-[1.25rem] font-light tracking-[0.05rem]">
                    Ops gives businesses a centralized, efficient way to record goods flowing in and out — through smart, customizable forms built for real operations.
                </p>
            </div>
        </section>
    );
}