"use client"

import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "@/components/ui/button"
import { InboxIcon, RefreshCcw, ArrowUpDown, Calendar } from "lucide-react"

export default function TradingHistory() {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto ">
      {/* Header */}
      <header className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <div>
              <h1 className="font-medium">History</h1>
              <p className="text-sm text-muted-foreground">All symbols</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <RefreshCcw className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ArrowUpDown className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <Tabs defaultValue="positions" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="positions"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            POSITIONS
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            ORDERS
          </TabsTrigger>
          <TabsTrigger
            value="deals"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            DEALS
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <InboxIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">Empty history</p>
        </div>
      </div>

 
    </div>
  )
}

