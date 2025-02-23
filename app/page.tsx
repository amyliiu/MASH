import { Header } from "../components/header"
import { StockList } from "../components/stock-list"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Top 10 Fashion Magazine Stocks</h2>
        <StockList />
      </main>
    </div>
  )
}

