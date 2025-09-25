import TotalBalanceCard from "../components/TotalBalanceCard.jsx";
import StockComponentCard from "../components/StockComponentCard.jsx";
import CryptoComponentCard from "../components/CryptoComponentCard.jsx";
import StocksListComponent from "../components/StocksListComponent.jsx";
import TrendingStocksComponent from "../components/TrendingStocksComponent.jsx";
import PortfolioOverviewComponent from "../components/PortfolioOverviewComponent.jsx";
import RecentTranscationsComponent from "../components/RecentTransactionsComponent.jsx";

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

              {/* TRENDING STOCKS CARD */}
              <div className={"col-span-6 lg:col-span-3 lg:row-span-2"}>
                  <TrendingStocksComponent/>
              </div>

              {/* PORTFOLIO OVERVIEW CARD */}
              <div className={"col-span-6 lg:col-span-9"}>
                  <PortfolioOverviewComponent/>
              </div>

              {/* RECENT TRANSACTIONS CARD */}
              <div className={"col-span-6 lg:col-span-9"}>
                  <RecentTranscationsComponent/>
              </div>

              <div className={"col-span-6 lg:col-span-12"}>
                  <TotalBalanceCard/>
              </div>
          </div>
      </>
    );
}