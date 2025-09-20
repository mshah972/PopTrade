import React from "react";

export default function DashboardSummaryCard() {
    return (
        <>
            <section aria-label="Total Balance Card"
                     className="bg-white/10 backdrop-blur-xl border border-gray-200 shadow-xl shadow-gray-300/30 p-6 rounded-2xl w-full flex flex-col">
                {/* Total Balance Section */}
                <div className="flex flex-row w-full justify-start items-center space-x-4">
                    <div className="bg-accent-primary rounded-full p-2 shadow-lg shadow-accent-primary/60">
                        <img src="src/assets/Dollar%20Minimalistic.svg" alt="Dollar Icon" className="w-6"/>
                    </div>
                    <h3 className="font-normal text-lg text-shadow-lg text-shadow-gray-400/10">Total Balance</h3>
                </div>
                {/* Balance Details */}
                <div class="flex flex-row w-full space-x-2 mt-10">
                    <div class="flex flex-row justify-start items-center space-x-2">
                        <div class="text-accent-primary -mt-6">
                            <h3 class="font-medium text-xl text-shadow-lg text-shadow-accent-primary/15">$</h3>
                        </div>
                        <h2 class="font-semibold text-4xl text-shadow-lg text-shadow-gray-400/10">10,000.00</h2>
                    </div>
                    <div class="flex flex-row items-end space-x-1">
                        <p class="text-accent-green text-sm text-shadow-lg text-shadow-accent-green/10">$1.90</p>
                        <p class="text-accent-green text-sm text-shadow-lg text-shadow-accent-green/10">(0.29%)</p>
                    </div>
                </div>

                {/* Balance Allocation Bar */}
                <div class="flex flex-col w-full space-y-2 mt-6">
                    <div class="flex flex-row items-center shadow-lg shadow-accent-primary/10">
                        <span class="w-1/2 h-5 bg-accent-market rounded-l"></span>
                        <span class="w-1/2 h-5 bg-accent-crypto"></span>
                        <span class="w-1/2 h-5 bg-accent-cash rounded-r"></span>
                    </div>
                </div>

                {/* Allocation Details */}
                <div class="flex flex-col w-full space-y-4 mt-10">
                    {/* Stock Market Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-market rounded shadow-lg shadow-market/50"></div>
                            <p class="text-sm font-light text-shadow-lg text-shadow-gray-400/10">Stock Market</p>
                        </div>
                        {/* Stocks Profit Ratio */}
                        <div class="bg-primary/20 backdrop-blur-lg ring-1 ring-gray-400/20 p-1 rounded-md shadow-lg shadow-gray-300/30">
                            <p class="text-xs font-light text-shadow-lg text-shadow-gray-400/10">32.5%</p>
                        </div>
                    </div>

                    {/* Crypto Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-crypto rounded shadow-lg shadow-crypto/50"></div>
                            <p class="text-sm font-light text-shadow-lg text-shadow-gray-400/10">Crypto</p>
                        </div>
                        {/* Crypto Profit Ratio */}
                        <div class="bg-primary/20 backdrop-blur-lg ring-1 ring-gray-400/20 p-1 rounded-md shadow-lg shadow-gray-300/30">
                            <p class="text-xs font-light text-shadow-lg text-shadow-gray-400/10">32.5%</p>
                        </div>
                    </div>

                    {/* Cash Percentage Ratio */}
                    <div class="flex flex-row justify-between items-center">
                        <div class="flex space-x-2 items-center">
                            <div class="w-4 h-4 bg-accent-cash rounded shadow-lg shadow-cash/50"></div>
                            <p class="text-sm font-light text-shadow-lg text-shadow-gray-400/10">Cash</p>
                        </div>
                        {/* Crypto Profit Ratio */}
                        <div class="bg-primary/20 backdrop-blur-lg ring-1 ring-gray-400/20 p-1 rounded-md shadow-lg shadow-gray-300/30">
                            <p class="text-xs font-light text-shadow-lg text-shadow-gray-400/10">32.5%</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}