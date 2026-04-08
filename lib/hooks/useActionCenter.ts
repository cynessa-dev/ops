import { useCallback } from "react";
import useSlideOver from "@/lib/hooks/useSlideOver";

type ActionMethod = "inbound" | "outbound";

export default function useActionCenter() {
    const { isOpen, openSlideOver, closeSlideOver } = useSlideOver();

    const recordInboundGoods = useCallback(() => {
        // Logic for recording inbound goods goes here
    }, []);

    const recordOutboundGoods = useCallback(() => {
        // Logic for recording outbound goods goes here
    }, []);

    const handleSubmit = useCallback((items: Record<string, unknown>[], method: ActionMethod) => {
        if (method === "inbound") {
            recordInboundGoods();
        } else {
            recordOutboundGoods();
        }
        console.log("Submitted:", items, method);
        // Here you can add logic to save the items
    }, [recordInboundGoods, recordOutboundGoods]);

    const handleClick = useCallback(() => {
        openSlideOver();
    }, [openSlideOver]);

    return {
        isOpen,
        closeSlideOver,
        handleClick,
        handleSubmit,
    };
}
