import TotalBalanceCard from "../components/TotalBalanceCard.jsx";
import StockComponentCard from "../components/StockComponentCard.jsx";
import CryptoComponentCard from "../components/CryptoComponentCard.jsx";
import StocksListComponent from "../components/StocksListComponent.jsx";

export default function HomePage() {
    return (
      <>
          <div className="grid grid-cols-1 sm:grid-cols-6 xl:grid-cols-12 grid-flow-dense auto-rows-[minmax(140px,auto)] m-2 gap-6">
              {/* TOTAL ACCOUNT BALANCE CARD */}
              <div className="col-span-6 lg:col-span-3">
                  <TotalBalanceCard/>
              </div>

              {/* SPY CARD */}
              <div className={"col-span-6 lg:col-span-3"}>
                  <StockComponentCard/>
              </div>

              {/* BTC CARD */}
              <div className={"col-span-6 lg:col-span-3"}>
                  <CryptoComponentCard/>
              </div>

              {/* FAVORITE STOCKS CARD */}
              <div className={"col-span-6 lg:col-span-3"}>
                  <StocksListComponent/>
              </div>

              {/* PROFIT TRACKER CARD */}
              <div className={"col-span-6 lg:col-span-3"}>
                  <TotalBalanceCard/>
              </div>

              {/* PORTFOLIO OVERVIEW CARD */}
              <div className={"col-span-6 lg:col-span-9"}>
                  <TotalBalanceCard/>
              </div>

              {/* TRENDING STOCKS CARD */}
              <div className={"col-span-6 lg:col-span-4"}>
                  <TotalBalanceCard/>
              </div>

              {/* RECENT TRANSACTIONS CARD */}
              <div className={"col-span-6 lg:col-span-8"}>
                  <TotalBalanceCard/>
              </div>
          </div>
      </>
    );
}