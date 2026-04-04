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

    const handleClick = useCallback((method: ActionMethod) => {
        if (method === "inbound") {
            recordInboundGoods();
        } else {
            recordOutboundGoods();
        }

        openSlideOver();
    }, [openSlideOver, recordInboundGoods, recordOutboundGoods]);

    return {
        isOpen,
        closeSlideOver,
        handleClick,
    };
}
