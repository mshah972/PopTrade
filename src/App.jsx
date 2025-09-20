import './App.css'
import NavBar from "./components/NavBar.jsx";
import DashboardSummaryCard from "./components/DashboardSummaryCard.jsx";

function App() {

    return (
        <>
            <div className="min-h-screen">
                <header>
                    <NavBar/>
                </header>
                <main className="mx-auto px-4 py-1">
                    <div className="grid grid-cols-1 sm:grid-cols-6 xl:grid-cols-12 grid-flow-dense auto-rows-[minmax(140px,auto)] m-2 gap-4">
                        <div className="md:col-span-4 lg:col-span-3">
                            <DashboardSummaryCard/>
                        </div>
                        {/* Right Column for other content */}
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
