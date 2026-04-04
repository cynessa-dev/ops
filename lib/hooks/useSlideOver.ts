import { useCallback, useState } from "react";

export default function useSlideOver() {
    const [isOpen, setIsOpen] = useState(false);

    const openSlideOver = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeSlideOver = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleSlideOver = useCallback(() => {
        setIsOpen((current) => !current);
    }, []);

    return {
        isOpen,
        openSlideOver,
        closeSlideOver,
        toggleSlideOver,
    };
}
