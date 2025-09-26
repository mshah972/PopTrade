import React from "react";
import ComponentHeader from "../utils/ComponentHeader.jsx";

export default function NewsComponent() {
    return (
        <>
            <section aria-label={"News-Component"}
                     className={"backdrop-blur-[5px] ring-2 ring-gray-300/40 shadow-md shadow-gray-400/20 inset-shadow-sm inset-shadow-white p-2 rounded-4xl w-full flex flex-col h-full overflow-hidden"}>
                {/* Portfolio Header */}
                <div className={"flex flex-row w-full justify-between items-center space-x-3 px-4 py-4"}>
                    <ComponentHeader
                        imageUrl={"https://raw.githubusercontent.com/mshah972/PopTrade/254836d71970db8d3674c65ebda652536dcbf282/src/assets/news.svg"}
                        title={"Recent News Articles"}/>
                </div>
            </section>
        </>
    );
}