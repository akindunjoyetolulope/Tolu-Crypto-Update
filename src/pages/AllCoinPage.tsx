import { Header } from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "@emotion/styled";
import media from "../styles/media";
import Table from "../components/Table";
import { useState } from "react";
import TrendingCard from "../components/TrendingCards";
import axios from "axios";

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

const AllCoinPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </StyledTable>
        </None>
      </div>
    </>
  );
};

export default AllCoinPage;

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
