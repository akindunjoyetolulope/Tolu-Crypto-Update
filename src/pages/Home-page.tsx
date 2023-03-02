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
import { numberWithCommas } from "../helpers/helper";
import { useNavigate } from "react-router-dom";
import themes from "../constants/themes";
import ResourceItem, { ResourceItemWrapper } from "../components/ResourceItem";

const HomePage = () => {
  const [coins, setCoins] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const navigate = useNavigate();

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
        <TrendingCard />
        <InputEl>
          <input
            type="text"
            name="firstname"
            placeholder="Search For a Crypto Currency.."
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputEl>
        <Container>
          <h3>Cryptocurrency Prices by Market Cap</h3>
          <StyledTable
            headings={[
              { content: "Coin" },
              { content: "Amount" },
              { content: "24h change" },
              { content: "Market Cap" },
            ]}
          >
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => (
                <Table.Row
                  onClick={() => navigate(`/coin/${row.id}`)}
                  key={row.id}
                >
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
                  <Table.Cell>
                    {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                  </Table.Cell>
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
                  <Table.Cell>
                    {symbol}{" "}
                    {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                  </Table.Cell>
                </Table.Row>
              ))}
          </StyledTable>

          <ResourceItemWrapper>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => (
                <ResourceItem
                  key={row.id}
                  id={row.id}
                  imageUrl={row.image}
                  itemTitle={row.name}
                  subTitle={
                    <>
                      {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                    </>
                  }
                  description={
                    <div
                      style={{
                        color:
                          row?.price_change_percentage_24h >= 0
                            ? "rgb(14, 203, 129)"
                            : "red",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      {row?.price_change_percentage_24h >= 0 && "+"}
                      {row?.price_change_percentage_24h?.toFixed(2)}%
                    </div>
                  }
                  onAction={() => navigate(`/coin/${row.id}`)}
                />
              ))}
          </ResourceItemWrapper>
        </Container>
      </div>
    </>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const InputEl = styled.div`
  /* ${media.mobile} {
    display: none;
  } */

  input[type="text"] {
    width: 100%;
    padding: 14px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid ${themes.colors.grey};
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const StyledTable = styled(Table)`
  margin-top: 2rem;
  ${media.mobile} {
    display: none;
  }
  ${media.smallDesktop} {
    display: none;
  }
  table {
    min-width: 70rem;
  }
`;
