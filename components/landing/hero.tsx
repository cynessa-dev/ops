import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-w-full min-h-screen px-6 pt-32">
            <div id="header" className="flex flex-col gap-4 w-4/5 select-none">
                <h1 className="text-(--heading) text-[4rem] md:text-[5rem] xl:text-[6rem] font-black tracking-[-0.1rem]">OPERATE WITH EASE</h1>
                <p className="text-(--secondary) text-[2rem] leading-8 tracking-[0.1rem]">Work, collaborate, and communicate <br /> with the right tools — all in one place!</p>
            </div>
            <div id="actions" className="mt-16 w-1/5 flex gap-4">
                <button className="bg-(--primary-action) text-background px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-(--primary-hover)">LET'S GET STARTED</button>
            </div>
            {/* SCROLL DOWN */}
            <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center cursor-pointer animate-bounce">
                <div className="flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 bg-(--card) rounded-full">
                    <Image src="/icons/mouse.png" alt="Scroll Down" width={50} height={50} className="w-12 xl:16" />
                </div>
                <Image src="/icons/double-down.png" alt="Scroll Down Indicator" width={50} height={50} className="w-12 xl:16 animate-bounce" />
            </div>
        </section>
    );
}