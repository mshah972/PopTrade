import React from "react";

export default function RecentTransactionsComponent() {
    return (
        <>
            <section aria-label={"Recent-Transactions-Component"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-full overflow-hidden"}>
                <div className="flex flex-row w-full justify-between items-center space-x-3 px-4 py-4">
                    <div className={"flex flex-row items-center space-x-3 text-nowrap"}>
                        <div
                            className="bg-accent-primary rounded-full p-2 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/5c4b501be7663c490d404ac728cbd6baeaf2646b/src/assets/recent-transactions.svg"
                                alt="Favorite Icon" className="w-5"/>
                        </div>
                        <h3 className="font-normal text-lg lg:text-lg text-shadow-md text-shadow-gray-400/30">Recent Transactions</h3>
                    </div>
                </div>
            </section>
        </>
    );
}