import React from "react";

export default function TotalBalanceCard() {
    return (
        <>
            <section aria-label="Total Balance Card"
                     className="backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-6 rounded-4xl w-full flex flex-col">
                {/* Total Balance Section */}
                <div className="flex flex-row w-full justify-start items-center space-x-3">
                    <div className="bg-accent-primary rounded-full p-1 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                        <img src="https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/Dollar%20Minimalistic.svg" alt="Dollar Icon" className="w-6"/>
                    </div>
                    <h3 className="font-normal text-lg text-shadow-lg text-shadow-gray-300/45">Total Balance</h3>
                </div>
                {/* Balance Details */}
                <div class="flex flex-row w-full space-x-2 mt-10 overflow-clip">
                    <div class="flex flex-row justify-start items-center space-x-2">
                        <div class="text-accent-primary -mt-6">
                            <h3 class="font-medium text-xl text-shadow-md text-shadow-gray-400/20">$</h3>
                        </div>
                        <h2 class="font-semibold text-4xl text-shadow-md text-shadow-gray-400/40">10,000.00</h2>
                    </div>
                    <div class="flex flex-row items-end space-x-1">
                        <p class="text-accent-green text-sm text-shadow-md text-shadow-gray-300/20">$1.90</p>
                        <p class="text-accent-green text-sm text-shadow-md text-shadow-gray-300/20">(0.29%)</p>
                    </div>
                </div>

                {/* Balance Allocation Bar */}
                <div class="flex flex-col w-full space-y-2 mt-6">
                    <div class="flex flex-row items-center shadow-lg shadow-accent-primary/10">
                        <span class="w-1/2 h-5 bg-accent-market rounded-l inset-shadow-sm inset-shadow-white/30"></span>
                        <span class="w-1/2 h-5 bg-accent-crypto inset-shadow-sm inset-shadow-white/30"></span>
                        <span class="w-1/2 h-5 bg-accent-cash rounded-r inset-shadow-sm inset-shadow-white/30"></span>
                    </div>
                </div>

                {/* Allocation Details */}
                <div class="flex flex-col w-full space-y-4 mt-10">
                    {/* Stock Market Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-market rounded shadow-lg shadow-market/50 inset-shadow-sm inset-shadow-white/30"></div>
                            <p class="text-sm font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">Stock Market</p>
                        </div>
                        {/* Stocks Profit Ratio */}
                        <div class="backdrop-blur-sm ring-1 ring-gray-300/40 p-1 rounded-md shadow-lg shadow-gray-300/30 inset-shadow-sm inset-shadow-white">
                            <p class="text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">32.5%</p>
                        </div>
                    </div>

                    {/* Crypto Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-crypto rounded shadow-lg shadow-crypto/50 inset-shadow-sm inset-shadow-white/30"></div>
                            <p class="text-sm font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">Crypto</p>
                        </div>
                        {/* Crypto Profit Ratio */}
                        <div class="backdrop-blur-sm ring-1 ring-gray-300/40 p-1 rounded-md shadow-lg shadow-gray-300/30 inset-shadow-sm inset-shadow-white">
                            <p class="text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">32.5%</p>
                        </div>
                    </div>

                    {/* Cash Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-cash rounded shadow-lg shadow-cash/50 inset-shadow-sm inset-shadow-white/30"></div>
                            <p class="text-sm font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">Cash</p>
                        </div>
                        {/* Crypto Profit Ratio */}
                        <div class="backdrop-blur-sm ring-1 ring-gray-300/40 p-1 rounded-md shadow-lg shadow-gray-300/30 inset-shadow-sm inset-shadow-white">
                            <p class="text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700">32.5%</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}