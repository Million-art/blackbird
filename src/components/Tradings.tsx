import { Menu, ArrowUpDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Tradings() {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <div className="flex   p-4 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-medium">Trade</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ArrowUpDown className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-none rounded-none">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Balance:</span>
            <span className="font-medium tabular-nums">0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Equity:</span>
            <span className="font-medium tabular-nums">0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Free margin:</span>
            <span className="font-medium tabular-nums">0.00</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

