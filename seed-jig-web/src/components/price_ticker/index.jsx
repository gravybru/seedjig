import Typography from "@mui/material/Typography";
import "./index.css";

const example_price_gbp = 175;

const PriceTicker = ({ data }) => {
  return (
    <div className="ticker-container">
      <Typography variant="h5">Seed Jig 1.0 Unit Price</Typography>
      <Typography variant="body2">
        <br />
        GBP: £{example_price_gbp}
        <br />
        BTC: {example_price_gbp / data.bpi.GBP.rate_float}
        <br />
        <br />
      </Typography>
      {Object.values(data.bpi).map((fiat, index) => (
        <Typography key={fiat + index} variant="caption">
          {fiat.code}: {fiat.rate}
          <br />{" "}
        </Typography>
      ))}
      <Typography variant="caption">
        <br />

        {data.disclaimer}
        <br />
        <br />
        {`Updated: ${data.time.updated}`}
      </Typography>
    </div>
  );
};

export default PriceTicker;
