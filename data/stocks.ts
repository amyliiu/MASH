export interface Stock {
  name: string
  symbol: string
  price: number
  change: number
}

export const stocks: Stock[] = [
  { name: "Vogue Inc.", symbol: "VGE", price: 45.67, change: 2.3 },
  { name: "Elle Enterprises", symbol: "ELE", price: 32.89, change: -1.5 },
  { name: "Harper's Bazaar Group", symbol: "HBG", price: 28.45, change: 0.8 },
  { name: "Cosmopolitan Media", symbol: "CSM", price: 19.99, change: -0.7 },
  { name: "InStyle Holdings", symbol: "INS", price: 37.12, change: 1.2 },
  { name: "Glamour Global", symbol: "GLM", price: 22.34, change: -2.1 },
  { name: "Marie Claire Corp", symbol: "MCC", price: 41.56, change: 3.4 },
  { name: "Vanity Fair Publications", symbol: "VFP", price: 53.78, change: -0.9 },
  { name: "W Magazine Group", symbol: "WMG", price: 29.87, change: 1.7 },
  { name: "Allure Beauty Inc.", symbol: "ALB", price: 18.23, change: 0.5 },
]

