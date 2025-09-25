import React from "react";

export default function TrendingStocksRowComponent({name, price, volume}) {
    return (
        <>
            <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>{name}</p>
                <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>${price}</p>
                <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>{volume}</p>
            </div>
        </>
    );
}