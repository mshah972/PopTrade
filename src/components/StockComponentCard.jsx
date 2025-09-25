import React from "react";

export default function StockComponentCard() {
    return (
        <>
            <section aria-label="Stock Component Card"
                     className="backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-6 rounded-4xl w-full flex flex-col h-full">
                {/* Stock Information Section */}
                <div className="flex flex-row w-full justify-between items-center space-x-3">
                    <div className={"flex flex-row items-center space-x-3 text-nowrap w-1/2"}>
                        <div className="bg-accent-primary rounded-full p-2 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                            <img src="https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/chart.svg" alt="Dollar Icon" className="w-4"/>
                        </div>
                        <h3 className="font-normal text-lg lg:text-lg text-shadow-md text-shadow-gray-400/30">S&P 500 Index</h3>
                    </div>
                    <div>
                        <div
                            className={"flex flex-row items-center space-x-2 rounded-full ring-1 ring-neutral-200/60 inset-shadow-sm inset-shadow-white shadow-md shadow-gray-400/10 backdrop-blur-sm px-3 py-2"}>
                            <p className={"text-[10px] text-shadow-sm text-shadow-neutral-300/30 text-neutral-600 font-normal"}>Market
                                Status</p>
                            <span className="relative flex size-2">
                              <span
                                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-red opacity-75"></span>
                              <span id="market-status"
                                    className="relative inline-flex size-2 rounded-full bg-accent-red"></span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stock Details */}
                <div className="flex flex-row w-full space-x-2 mt-10 overflow-clip">
                    <div className="flex flex-row justify-start items-center space-x-2">
                        <div className="text-accent-primary -mt-6">
                            <h3 className="font-medium text-xl text-shadow-md text-shadow-gray-400/20">$</h3>
                        </div>
                        <h2 className="font-semibold text-4xl text-shadow-md text-shadow-gray-400/40">631.23</h2>
                    </div>
                    <div className="flex flex-row items-end space-x-1">
                        <p className="text-accent-green text-sm text-shadow-md text-shadow-gray-300/20">$1.90</p>
                        <p className="text-accent-green text-sm text-shadow-md text-shadow-gray-300/20">(0.29%)</p>
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