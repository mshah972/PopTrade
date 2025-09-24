import React from "react";

export default function StocksListComponent() {
    return (
        <>
            <section aria-label={"Crypto-Component-Card"} className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-[350px]"}>
                {/* Crypto Information Section */}
                <div className="flex flex-row w-full justify-between items-center space-x-3 px-4 py-4">
                    <div className={"flex flex-row items-center space-x-3 text-nowrap"}>
                        <div
                            className="bg-accent-primary rounded-full p-1.5 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/favorite.svg"
                                alt="Favorite Icon" className="w-5"/>
                        </div>
                        <h3 className="font-normal text-lg lg:text-lg text-shadow-md text-shadow-gray-400/30">Favorite Stocks</h3>
                    </div>
                </div>

                {/* List of stocks */}
                <div className={"flex flex-col w-full space-y-4 overflow-y-scroll p-1.5 h-full"}>
                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-3xl px-4 py-4 inset-shadow-sm inset-shadow-white space-x-2"}>
                        {/* Label */}
                        <div className={"flex flex-col items-start text-center space-y-1 mr-6"}>
                            <p className={"text-sm font-semibold text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>APPL</p>
                            <p className={"text-[10px] font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Apple</p>
                        </div>

                        {/* Value */}
                        <div className={"flex flex-col text-end rounded-xl ml-4 space-y-1"}>
                            <p className={"text-sm font-medium text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>$254.15</p>
                            <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$1.99 (0.00%)</p>
                        </div>
                    </div>

                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-3xl px-4 py-4 inset-shadow-sm inset-shadow-white space-x-2"}>
                        {/* Label */}
                        <div className={"flex flex-col items-start text-center space-y-1 mr-6"}>
                            <p className={"text-sm font-semibold text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>TSLA</p>
                            <p className={"text-[10px] font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Tesla</p>
                        </div>

                        {/* Value */}
                        <div className={"flex flex-col text-end rounded-xl ml-4 space-y-1"}>
                            <p className={"text-sm font-medium text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>$254.15</p>
                            <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$1.99 (0.00%)</p>
                        </div>
                    </div>

                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-3xl px-4 py-4 inset-shadow-sm inset-shadow-white space-x-2"}>
                        {/* Label */}
                        <div className={"flex flex-col items-start text-start space-y-1 mr-6"}>
                            <p className={"text-sm font-semibold text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>PLTR</p>
                            <p className={"text-[10px] font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Palantir Technologies</p>
                        </div>

                        {/* Value */}
                        <div className={"flex flex-col text-end rounded-xl ml-4 space-y-1"}>
                            <p className={"text-sm font-medium text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>$254.15</p>
                            <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$1.99 (0.00%)</p>
                        </div>
                    </div>

                    <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-3xl px-4 py-4 inset-shadow-sm inset-shadow-white space-x-2"}>
                        {/* Label */}
                        <div className={"flex flex-col items-start text-start space-y-1 mr-6"}>
                            <p className={"text-sm font-semibold text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>NFLX</p>
                            <p className={"text-[10px] font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>Netflix</p>
                        </div>

                        {/* Value */}
                        <div className={"flex flex-col text-end rounded-xl ml-4 space-y-1"}>
                            <p className={"text-sm font-medium text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>$254.15</p>
                            <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>$1.99 (0.00%)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}