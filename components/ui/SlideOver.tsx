'use client';

type SlideOverProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SlideOver({ isOpen, onClose }: SlideOverProps) {
    return (
        <>
            {/* BACKDROP BLUR */}
            <div 
                onClick={ onClose }
                className={`
                    fixed inset-0 
                    bg-black/30 
                    overflow-hidden 
                    backdrop-blur-sm 
                    transition-opacity 
                    duration-300 
                    z-40
                    ${ isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" }
                `}
            />

            {/* SLIDE OVER CONTENT */}
            <div 
                className={`
                    fixed
                    top-0
                    right-0
                    p-6
                    h-full
                    w-80
                    bg-card
                    shadow-lg
                    transform
                    transition-transform
                    duration-300
                    z-50
                    ${ isOpen ? "translate-x-0" : "translate-x-full" }
                `}
            >
                <h2 className="text-xl font-semibold mb-4">Slide Over Panel</h2>
                <p>This is the content of the slide over. You can put any information or actions here.</p>
                <button 
                    onClick={ onClose }
                    className="mt-4 px-4 py-2 bg-danger text-foreground font-semibold rounded cursor-pointer"
                >
                    Cancel
                </button>
            </div>
        </>
    );
}