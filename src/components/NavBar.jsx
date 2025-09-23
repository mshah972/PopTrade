import {useState} from 'react';

const navigation = [
    {name: 'Dashboard', href: '#'},
    {name: 'Market', href: '#'},
    {name: 'Asset', href: '#'},
    {name: 'Communities', href: '#'},
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav aria-label="Nav Bar"
                 className="flex items-center justify-between m-4 p-4 backdrop-blur-[6px] ring-1 ring-gray-200 rounded-full shadow-lg shadow-primary inset-shadow-sm inset-shadow-neutral-300/20">
                <div>
                    <div
                        className="bg-accent-primary p-3.5 lg:p-4 rounded-full backdrop-blur-2xl cursor-pointer shadow-lg shadow-accent-primary text-sm lg:text-md hover:bg-primary transition duration-500 group border border-transparent hover:border-gray-300">
                        {/*!-- default logo --*/}
                        <img
                            src="https://raw.githubusercontent.com/mshah972/PopTrade/cff17285d648cadcf93db08ed0a53d8efbffa60b/src/assets/Logo.svg"
                            alt="Logo" className="w-4 h-4 lg:w-5 lg:h-5 flex group-hover:hidden"/>

                        {/*!-- hover logo --*/}
                        <img
                            src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/logo_black.svg"
                            alt="Logo" className="w-4 h-4 lg:w-5 lg:h-5 hidden group-hover:flex"/>
                    </div>
                </div>
                <div>
                    <div
                        className="backdrop-blur-[5px] shadow-xl shadow-gray-300/20 inset-shadow-sm inset-shadow-neutral-400/10 ring-2 ring-gray-300/40 px-8 py-4 rounded-full flex max-w-7xl justify-center space-x-20 hidden lg:flex md:flex ml-12 mr-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href}>
                                <h3 className="text-sm lg:text-md text-gray-600 font-normal hover:text-accent-primary hover:scale-105 cursor-pointer transition duration-200 text-shadow-lg text-shadow-gray-300/25">{item.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <button
                            className="backdrop-blur-[5px] ring-2 ring-gray-300/40 rounded-full p-3.5 lg:p-4 cursor-pointer shadow-lg shadow-gray-300/40 inset-shadow-sm inset-shadow-neutral-400/10 hover:shadow-xl hover:scale-105 transition duration-500">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/search-normal.svg"
                                alt="Search Button" className="w-4 h-4 lg:w-5 lg:h-5"/>
                        </button>
                        <button
                            className="backdrop-blur-[5px] ring-2 ring-gray-300/40 rounded-full p-3.5 lg:p-4 cursor-pointer shadow-lg shadow-gray-300/40 inset-shadow-sm inset-shadow-neutral-400/10 hover:shadow-xl hover:scale-105 transition duration-500">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/notification-bing.svg"
                                alt="Search Button" className="w-4 h-4 lg:w-5 lg:h-5"/>
                        </button>
                        <button onClick={() => setMobileMenuOpen((v) => !v)}
                                className="flex lg:hidden md:hidden backdrop-blur-[5px] ring-2 ring-gray-300/40 rounded-full p-3.5 lg:p-4 cursor-pointer shadow-lg shadow-gray-300/40 inset-shadow-sm inset-shadow-neutral-400/10 hover:shadow-xl hover:scale-105 transition duration-500">
                            <img
                                src="https://raw.githubusercontent.com/mshah972/PopTrade/9a2c703f52c226d858edde17ef53569103005a25/src/assets/Hamburger%20Menu.svg"
                                alt="Search Button" className="w-4 h-4 lg:w-5 lg:h-5"/>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div>
                    <div className={`absolute inset-x-0 top-full mt-4 mr-6 ml-6 bg-white/60 backdrop-blur-[6px] shadow-2xl shadow-gray-300/40 inset-shadow-sm inset-shadow-white md:hidden ring-2 ring-gray-300/50 rounded-2xl px-6 py-6 flex flex-col gap-6 text-left z-50 origin-top overflow-hidden ${mobileMenuOpen ? "animate-[fadeIn_0.5s_ease-out_forwards]" : "animate-[fadeOut_0.5s_ease-in_forwards"}`}>
                        {navigation.map((item) =>
                            <a key={item.name} href={item.href}>
                                <h3 className="text-sm lg:text-md text-gray-800 font-normal hover:text-accent-primary cursor-pointer transition duration-400 text-shadow-lg text-shadow-gray-400/20">{item.name}</h3>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
