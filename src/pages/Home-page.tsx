import { Header } from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "@emotion/styled";
import media from "../styles/media";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import TrendingCard from "../components/TrendingCards";
import axios from "axios";
import { CryptoState } from "../provider/CryotoProvider";
import { CoinList } from "../api/api";
import { Data } from "../models/appTheme";

const DummyData = [
  {
    id: 1,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id: 2,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id: 3,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id: 4,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id: 5,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
];

const HomePage = () => {
  const [coins, setCoins] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <>
      <Header />
      <div className="app">
        <SubHeader />
        <div>
          <TrendingCard />
        </div>
        <None>
          <h3>Cryptocurrency Prices by Market Cap</h3>
          <StyledTable
            headings={[
              { content: "Coin" },
              { content: "Amount" },
              { content: "24h change" },
              { content: "Market Cap", alighCenter: true },
            ]}
          >
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => (
                <Table.Row>
                  <Table.Cell>
                    <div style={{ display: "flex" }}>
                      <img
                        src={row.image}
                        alt={row.name}
                        height="40"
                        style={{ marginBottom: 10, marginRight: 5 }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 14,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>{row.name}</span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell
                    style={{
                      color:
                        row?.price_change_percentage_24h >= 0
                          ? "rgb(14, 203, 129)"
                          : "red",
                      fontWeight: 500,
                    }}
                  >
                    {row?.price_change_percentage_24h >= 0 && "+"}
                    {row?.price_change_percentage_24h?.toFixed(2)}%
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              ))}
          </StyledTable>
        </None>
      </div>
    </>
  );
};

export default HomePage;

const None = styled.div`
  ${media.mobile} {
    display: none;
  }
`;

const StyledTable = styled(Table)`
  ${media.mobile} {
    display: none;
  }
  table {
    min-width: 70rem;
  }
`;
