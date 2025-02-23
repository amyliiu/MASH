import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import type { Stock } from "../data/stocks"

export function StockItem({ name, symbol, price, change }: Stock) {
  const isPositive = change >= 0
  const changeColor = isPositive ? "text-green-500" : "text-red-500"
  const ChangeIcon = isPositive ? ArrowUpIcon : ArrowDownIcon

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{symbol}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xl font-bold">${price.toFixed(2)}</span>
        <div className={`flex items-center ${changeColor}`}>
          <ChangeIcon className="w-4 h-4 mr-1" />
          <span>{Math.abs(change).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  )
}

