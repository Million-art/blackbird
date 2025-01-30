import { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol = "NASDAQ:AAPL", interval = "D" }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear existing widget if it exists
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    container.current?.appendChild(script);
  }, [symbol, interval]); // Updates widget when props change

  return (
    <div
      className="tradingview-widget-container absolute top-0 left-0 w-full h-full pb-16"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(TradingViewWidget);
