import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import PageFrame from "../../components/page_frame";
import PriceTicker from "../../components/price_ticker";

const Purchase = () => {
  const [tickerData, setTickerData] = useState(null);

  useEffect(() => {
    const load_ticker_data = async () => {
      try {
        const raw = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await raw.json();
        setTickerData(data);
      } catch (e) {
        console.warn(e);
      }
    };

    load_ticker_data();
    const interval = setInterval(load_ticker_data, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageFrame title="Purchase">
      {
        <div className="page-section">
          {tickerData !== null && <PriceTicker data={tickerData} />}
        </div>
      }
      <div className="page-section">
        <div className="text-frame">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </PageFrame>
  );
};

export default Purchase;
