import './App.css'
import NavBar from "./components/NavBar.jsx";
import TotalBalanceCard from "./components/TotalBalanceCard.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {

    return (
        <>
            <div className="min-h-screen">
                <header className="sticky top-4 z-50 bg-transparent">
                    <NavBar/>
                </header>
                <main className="mx-auto px-4 py-1">
                    <HomePage />
                </main>
            </div>
        </>
    )
}

export default App
