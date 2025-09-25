import React from "react";

export default function StockDetailsRow({symbol, companyName, price, changeDollar, changePercentage}) {
    return (
        <>
            <div className={"backdrop-blur-sm shadow-md shadow-gray-300/20 flex flex-row justify-between items-center ring-1 ring-neutral-200/50 rounded-3xl px-4 py-4 inset-shadow-sm inset-shadow-white space-x-2"}>
                {/* Label */}
                <div className={"flex flex-col items-start text-center space-y-1 mr-6"}>
                    <p className={"text-sm font-semibold text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>{symbol}</p>
                    <p className={"text-[10px] font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>{companyName}</p>
                </div>

                {/* Value */}
                <div className={"flex flex-col text-end rounded-xl ml-4 space-y-1"}>
                    <p className={"text-sm font-medium text-shadow-sm text-shadow-neutral-300/30 text-neutral-800"}>${price}</p>
                    <p className={"text-xs font-light text-shadow-sm text-shadow-neutral-300/30 text-neutral-600"}>${changeDollar} ({changePercentage}%)</p>
                </div>
            </div>
        </>
    );
}