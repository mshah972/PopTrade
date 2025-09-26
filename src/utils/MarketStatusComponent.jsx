import React from "react";

export default function MarketStatusComponent({marketStatus = false}) {
    const red = "bg-accent-red";
    const green = "bg-accent-green";

    return (
        <>
            <div
                className={"flex flex-row items-center space-x-2 rounded-full ring-1 ring-neutral-200/60 inset-shadow-sm inset-shadow-white shadow-md shadow-gray-400/10 backdrop-blur-sm px-3 py-2"}>
                <p className={"text-[10px] text-shadow-sm text-shadow-neutral-300/30 text-neutral-600 font-normal"}>Market
                    Status</p>
                <span className="relative flex size-2">
                              <span
                                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${marketStatus ? green : red } opacity-75`}></span>
                              <span id="market-status"
                                    className={`relative inline-flex size-2 rounded-full ${marketStatus ? green : red }`}></span>
                            </span>
            </div>
        </>
    );
}