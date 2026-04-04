'use client';

import Button from "@/components/ui/Button";
import SlideOver from "@/components/ui/SlideOver";
import useSlideOver from "@/lib/hooks/useSlideOver";

export default function ActionCenter() {
    const { isOpen, openSlideOver, closeSlideOver } = useSlideOver();

    function recordInboundGoods() {
        // Logic for recording inbound goods goes here
    }

    function recordOutboundGoods() {
        // Logic for recording outbound goods goes here
    }

    function handleClick(method: 'inbound' | 'outbound') {
        if (method === 'inbound') {
            recordInboundGoods();
        } else if (method === 'outbound') {
            recordOutboundGoods();
        } else {
            return; // Invalid method, do nothing
        }

        openSlideOver();
    }

    return (
        <>
            <section className="flex flex-col space-x-4 mx-8 my-4 md:flex-row">
                <Button type="button" label="Record Inbound Goods" action={ () => handleClick('inbound') } />
                <Button type="button" label="Record Outbound Goods" action={ () => handleClick('outbound') } />
            </section>
            <SlideOver isOpen={ isOpen } onClose={ closeSlideOver } />
        </>
    );
}