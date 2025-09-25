import React from "react";

export default function ComponentHeader({imageUrl, title}) {
    return (
        <>
            <div className={"flex flex-row items-center space-x-3"}>
                <div
                    className="bg-accent-primary rounded-full p-2 shadow-md shadow-neutral-400/30 inset-shadow-sm inset-shadow-white/20">
                    <img
                        src={imageUrl}
                        alt="Favorite Icon" className="w-5"/>
                </div>
                <h3 className="font-normal text-lg lg:text-lg text-shadow-md text-shadow-gray-400/30">{title}</h3>
            </div>
        </>
    );
}