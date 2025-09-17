'use client'
import { useState } from 'react';

const navigation = [
    {name: 'Dashboard', href: '#'},
    {name: 'Market', href: '#'},
    {name: 'Asset', href: '#'},
    {name: 'Communities', href: '#'},
]

export default function NavBar() {

    return (
       <>
           <div>
               <header className="absolute inset-x-0 top-0">
                   <nav aria-label="Global" className="flex items-center justify-between m-4 p-4 bg-white/50 backdrop-blur-3xl ring-1 ring-gray-200/50 rounded-full shadow-lg shadow-primary">
                       <div>
                           <div
                               className="bg-accent-primary p-4 rounded-full backdrop-blur-2xl cursor-pointer shadow-lg shadow-accent-primary text-sm lg:text-md hover:bg-primary transition duration-500 group border border-transparent hover:border-gray-300">
                               {/*!-- default logo --*/}
                               <img src="https://raw.githubusercontent.com/mshah972/PopTrade/cff17285d648cadcf93db08ed0a53d8efbffa60b/src/assets/Logo.svg" alt="Logo" className="w-5 flex group-hover:hidden"/>

                               {/*!-- hover logo --*/}
                               <img src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/logo_black.svg" alt="Logo" className="w-5 hidden group-hover:flex"/>
                           </div>
                       </div>
                       <div>
                           <div
                               className="bg-primary/60 backdrop-blur-2xl shadow-xl shadow-gray-300/20 ring-1 ring-gray-300/30 px-8 py-4 rounded-full flex max-w-7xl justify-center space-x-20 hidden lg:flex md:flex ml-12">
                               {navigation.map((item) => (
                                   <a key={item.name} href={item.href}>
                                       <h3 className="text-sm lg:text-md text-gray-600 font-normal hover:text-accent-primary cursor-pointer transition duration-400">{item.name}</h3>
                                   </a>
                               ))}
                           </div>
                       </div>
                       <div>
                           <div className="flex space-x-2">
                               <div
                                   className="bg-primary/60 backdrop-blur-2xl ring-1 ring-gray-300/40 rounded-full p-4 cursor-pointer shadow-lg shadow-gray-300/40 hover:shadow-xl transition duration-500">
                                   <img src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/search-normal.svg" alt="Search Button" className="w-4 lg:w-5"/>
                               </div>
                               <div
                                   className="bg-primary/60 backdrop-blur-2xl ring-1 ring-gray-300/40 rounded-full p-4 cursor-pointer shadow-lg shadow-gray-300/40 hover:shadow-xl transition duration-500">
                                   <img src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/notification-bing.svg" alt="Search Button" className="w-4 lg:w-5"/>
                               </div>
                               <div
                                   className="flex lg:hidden md:hidden bg-primary/60 border border-gray-300/40 rounded-full p-4 cursor-pointer shadow-lg shadow-gray-300/40 hover:shadow-xl transition duration-500">
                                   <img src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/Hamburger%20Menu.svg" alt="Search Button" className="w-4 lg:w-5"/>
                               </div>
                           </div>
                       </div>
                   </nav>
               </header>
           </div>
       </>
    );
}
