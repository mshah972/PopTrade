import React from "react";

export default function TrendingStocksComponent() {

    return (
        <>
            <section aria-label={"Trending-Stocks-Component"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-full overflow-hidden"}>
                {/* Trending Stocks Header */}
                <div className="flex flex-row w-full justify-between items-center space-x-3 px-4 py-4">
                    <div className={"flex flex-row items-center space-x-3 text-nowrap"}>
                        <div
                            className="bg-accent-primary rounded-full p-1.5 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/Fire.svg"
                                alt="Favorite Icon" className="w-5"/>
                        </div>
                        <h3 className="font-normal text-lg lg:text-lg text-shadow-md text-shadow-gray-400/30">Trending Stocks</h3>
                    </div>
                </div>

                <div className={"flex flex-col w-full h-full px-1 py-2 gap-3"}>
                    <div className={"flex flex-row justify-between px-4 py-2 mb-1 border-b border-neutral-200"}>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Name</p>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Price</p>
                        <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-700"}>Volume</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>APPL</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$241.56</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>42.30M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>TSLA</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$445.84</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>93.13M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>NVDA</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$176.74</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>143.56M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>

                    <div className={"flex flex-row justify-between px-4 py-2 border border-neutral-200/50 inset-shadow-sm inset-shadow-white backdrop-blur-sm rounded-full shadow-md shadow-neutral-200/20"}>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>PLTR</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>$179.35</p>
                        <p className={"text-[14px] font-medium text-shadow-sm text-shadow-neutral-400/20 text-neutral-700"}>45.38M</p>
                    </div>
                </div>
            </section>
        </>
    );
}