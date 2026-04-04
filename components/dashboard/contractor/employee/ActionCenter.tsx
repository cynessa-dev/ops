'use client';

import Button from "@/components/ui/Button";
import SlideOver from "@/components/ui/SlideOver";
import useActionCenter from "@/lib/hooks/useActionCenter";

export default function ActionCenter() {
    const { isOpen, closeSlideOver, handleClick } = useActionCenter();

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