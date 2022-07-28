import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selCoins, setSelCoins] = useState("0");
  const [result, setResult] = useState("0");

  const onChange = (event) => {
    setSelCoins(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const priceUSD = event.target[0].value;
    calculate(priceUSD);
  };

  const calculate = (priceUSD) => {
    setResult(priceUSD * selCoins);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length}개의 Coins)`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="write us dollars" />
        <button>Change Coins</button>
      </form>
      <p>you can change {result} coins!</p>
    </div>
  );
}

export default App;
