import React from "react";
import ComponentHeader from "../utils/ComponentHeader.jsx";
import MarketStatusComponent from "../utils/MarketStatusComponent.jsx";

export default function CryptoComponentCard() {
    return (
        <>
            <section aria-label={"Crypto-Component-Card"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-6 rounded-4xl w-full flex flex-col h-full"}>
                {/* Crypto Information Section */}
                <div className="flex flex-row w-full justify-between items-center space-x-3">
                    {/* Crypto Header */}
                    <div className={"flex flex-row items-center space-x-3 w-1/2"}>
                        <ComponentHeader imageUrl={"https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/BitcoinBadge.svg"} title={"Bitcoin - USD"} />
                    </div>

                    <MarketStatusComponent marketStatus={false} />
                </div>

                {/* Crypto Details */}
                <div className="flex flex-row w-full space-x-2 mt-10 overflow-clip">
                    <div className="flex flex-row justify-start items-center space-x-2">
                        <div className="text-accent-primary -mt-6">
                            <h3 className="font-medium text-xl text-shadow-md text-shadow-gray-400/20">$</h3>
                        </div>
                        <h2 className="font-semibold text-4xl text-shadow-md text-shadow-gray-400/40">112,285.54</h2>
                    </div>
                    <div className="flex flex-row items-end space-x-1">
                        <p className="text-accent-red text-sm text-shadow-md text-shadow-gray-300/20">$265.55</p>
                        <p className="text-accent-red text-sm text-shadow-md text-shadow-gray-300/20">(0.24%)</p>
                    </div>
                </div>

                {/* Divider */}
                <div className={"border-b border-gray-200/70 mt-4"}></div>

                {/* Stock's Market Details */}
                <div className="flex flex-col w-full space-y-4 mt-4">
                    {/* Open Price */}
                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-full p-2 inset-shadow-sm inset-shadow-white space-x-4"}>
                        {/* Label */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-normal px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Open Price</p>
                        </div>

                        {/* Border */}
                        <div className={"border-t border-neutral-200 w-full"}></div>

                        {/* Value */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-medium px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$0.00</p>
                        </div>
                    </div>

                    {/* High Price*/}
                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-full p-2 inset-shadow-sm inset-shadow-white space-x-4"}>
                        {/* Label */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-normal px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>High Price</p>
                        </div>

                        {/* Border */}
                        <div className={"border-t border-neutral-200 w-full"}></div>

                        {/* Value */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-medium px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$0.00</p>
                        </div>
                    </div>

                    {/* Low Price */}
                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-full p-2 inset-shadow-sm inset-shadow-white space-x-4"}>
                        {/* Label */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-normal px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Low Price</p>
                        </div>

                        {/* Border */}
                        <div className={"border-t border-neutral-200 w-full"}></div>

                        {/* Value */}
                        <div className={"backdrop-blur-sm inset-shadow-sm inset-shadow-white rounded-full shadow-sm shadow-gray-300/50 w-full text-center ring-1 ring-gray-200"}>
                            <p className={"text-[10px] lg:text-xs font-medium px-1 py-1 text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$0.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}