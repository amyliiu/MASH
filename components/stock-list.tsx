import { StockItem } from "./stock-item"
import { stocks } from "../data/stocks"

export function StockList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stocks.map((stock) => (
        <StockItem key={stock.symbol} {...stock} />
      ))}
    </div>
  )
}

