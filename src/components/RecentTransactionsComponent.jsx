import React from "react";
import ComponentHeader from "../utils/ComponentHeader.jsx";

export default function RecentTransactionsComponent() {
    return (
        <>
            <section aria-label={"Recent-Transactions-Component"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-full overflow-hidden"}>
                {/* Recent Transactions Header */}
                <div className={"flex flex-row w-full justify-between items-center space-x-3 px-4 py-4"}>
                    <ComponentHeader
                        imageUrl={"https://raw.githubusercontent.com/mshah972/PopTrade/5c4b501be7663c490d404ac728cbd6baeaf2646b/src/assets/recent-transactions.svg"}
                        title={"Recent Transactions"}/>
                </div>
            </section>
        </>
    );
}