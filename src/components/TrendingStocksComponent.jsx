import React from "react";
import TrendingStocksRowComponent from "../utils/TrendingStocksRowComponent.jsx";
import ComponentHeader from "../utils/ComponentHeader.jsx";

export default function TrendingStocksComponent() {

    return (
        <>
            <section aria-label={"Trending-Stocks-Component"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-full overflow-hidden"}>
                {/* Trending Stocks Header */}
                <div className="flex flex-row w-full justify-between items-center space-x-3 px-4 py-4">
                    <ComponentHeader imageUrl={"https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/Fire.svg"} title={"Trending Stocks"} />
                </div>

                <div className={"flex flex-col w-full h-full px-1 py-2 gap-3"}>
                    <div className={"flex flex-row justify-between px-4 py-2 mb-1 border-b border-neutral-200"}>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Name</p>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Price</p>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Volume</p>
                    </div>

                    <TrendingStocksRowComponent name={"Apple"} price={"241.65"} volume={"42.30M"} />
                </div>
            </section>
        </>
    );
}