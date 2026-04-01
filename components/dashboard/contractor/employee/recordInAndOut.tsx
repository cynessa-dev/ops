'use client';

import Button from "@/components/button";

export default function RecordInAndOut() {
    function handleRecordInboundGoods() {
        // Logic for recording inbound goods goes here
    }

    function handleRecordOutboundGoods() {
        // Logic for recording outbound goods goes here
    }

    return (
        <section className="flex flex-col space-x-4 mx-8 my-4 md:flex-row">
            <Button type="button" label="Record Inbound Goods" action={ handleRecordInboundGoods } />
            <Button type="button" label="Record Outbound Goods" action={ handleRecordOutboundGoods } />
        </section>
    );
}