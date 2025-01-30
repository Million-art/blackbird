import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowUpDown, LineChart, BarChart2, Clock, Users } from "lucide-react";
import { cn } from "@/libs/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string; 
}

export default function BottomNav() {
  const [active, setActive] = useState("charts");
  const navigate = useNavigate(); // Initialize navigate function

  const navItems: NavItem[] = [
    {
      id: "quotes",
      label: "Quotes",
      icon: <ArrowUpDown className="h-5 w-5" />,
      path: "/",
    },
    {
      id: "charts",
      label: "Charts",
      icon: <LineChart className="h-5 w-5" />,
      path: "/charts",
    },
    {
      id: "trade",
      label: "Trade",
      icon: <BarChart2 className="h-5 w-5" />,
      path: "/trade",
    },
    {
      id: "history",
      label: "History",
      icon: <Clock className="h-5 w-5" />,
      path: "/history",
    },
    {
      id: "referrals",
      label: "Referrals",
      icon: <Users className="h-5 w-5" />,
      path: "/referrals",
    },
  ];

  const handleNavigation = (id: string, path: string) => {
    setActive(id);
    navigate(path); // Navigate to the corresponding path
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white mt-2 ">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id, item.path)}
            className="flex flex-col items-center justify-center flex-1 h-full"
          >
            <div
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                active === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
