"use client";

import { useState, useEffect } from "react";
import {
  BarChart3Icon,
  PlusIcon,
  PencilIcon,
} from "lucide-react";

interface CryptoData {
  pair: string;
  price: string;
  priceAlt: string;
  time: string;
  change: string;
  changePercent: string;
  low: string;
  high: string;
}

export default function TradingQuotes() {
  const [data, setData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker");

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      const newData: CryptoData = {
        pair: "BTC/USDT",
        price: parseFloat(json.c).toFixed(2), // Last price
        priceAlt: parseFloat(json.o).toFixed(2), // Open price
        time: new Date(json.E).toLocaleTimeString(),
        change: parseFloat(json.p).toFixed(2), // Price change
        changePercent: `${parseFloat(json.P).toFixed(2)}%`, // % Change
        low: parseFloat(json.l).toFixed(2), // Low price
        high: parseFloat(json.h).toFixed(2), // High price
      };
      setData([newData]); // Update state with real-time data
    };

    return () => ws.close(); // Cleanup WebSocket on unmount
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <button className="text-gray-600">
          <BarChart3Icon className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">Live Quotes</h1>
        <div className="flex gap-2">
          <button className="text-gray-600">
            <PlusIcon className="h-6 w-6" />
          </button>
          <button className="text-gray-600">
            <PencilIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="divide-y">
        {data.map((item, index) => (
          <div key={index} className="p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{item.pair}</div>
                <div className="text-sm text-gray-500">{item.time}</div>
                <div
                  className={`text-sm ${
                    item.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.change} {item.changePercent}
                </div>
              </div>
              <div className="text-right">
                <div className="text-red-500 font-medium">{item.price}</div>
                <div className="text-sm text-gray-500">
                  L: {item.low} H: {item.high}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
}
