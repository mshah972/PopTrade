import React from "react";
import ComponentHeader from "../utils/ComponentHeader.jsx";
import StockDetailsRow from "../utils/StockDetailsRow.jsx";

export default function StocksListComponent() {
    return (
        <>
            <section aria-label={"Crypto-Component-Card"} className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-[350px]"}>
                {/* Crypto Information Section */}
                <div className="flex flex-row w-full justify-between items-center space-x-3 px-4 py-4">
                    <ComponentHeader imageUrl={"https://raw.githubusercontent.com/mshah972/PopTrade/63b44d73be90d6a43008c1617a16ca0c7cbe9dc8/src/assets/favorite.svg"} title={"Favorite Stocks"} />
                </div>

                {/* List of stocks */}
                <div className={"flex flex-col w-full space-y-4 overflow-y-scroll p-1.5 h-full"}>
                    <StockDetailsRow symbol={"APPL"} companyName={"Apple"} price={"254.15"} changeDollar={"1.99"} changePercentage={"0.00"} />
                </div>
            </section>
        </>
    );
}