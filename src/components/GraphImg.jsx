// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(182, 182, 182, 0.06)",
          "withdateranges": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container h-[100%] w-[100%] p-5 z-[-1rem] mb-4 mt-[-16px]" ref={container} >
     
    </div>
  );
}

export default TradingViewWidget;
