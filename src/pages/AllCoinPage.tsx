import { Header } from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "@emotion/styled";
import themes from "../constants/themes";

// interface Data {
//     data: object[]
// }

const DummyData = [
  {
    id:1,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id:2,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id:3,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id:4,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
  {
    id:5,
    name: "BTC",
    price: "$ 1,000,000",
    imaUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    rate: " - 5.88 %",
  },
];

const AllCoinPage = () => {
  return (
    <>
      <Header />
      <div className="app">
        <SubHeader />
        <div className="app">
          <h1> Top 5 Trending Coins</h1>
          <ListGroupEl>
            {DummyData.map((data) => (
              <li key={data.id}>
                <div className="coinName">
                  <ImgBox>
                    <img
                      width="30px"
                      height="30px"
                      src={data.imaUrl}
                      alt="coin pic"
                    />
                  </ImgBox>
                  <span>{data.name}</span>
                </div>
                <PriceBox>
                  <p>
                    {data.price} <span className="rate">({data.rate})</span>
                  </p>
                </PriceBox>
              </li>
            ))}
          </ListGroupEl>
        </div>
      </div>
    </>
  );
};

export default AllCoinPage;

const ListGroupEl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 14px;
  margin: 10px;

  li {
    border: 1px solid ${themes.colors.green};
    margin-top: -1px; /* Prevent double borders */
    background-color: ${themes.colors.lightGrey};
    padding: 1px;
    display: flex;
    justify-content: space-between;

    .coinName {
      display: flex;
      span {
        margin: auto 0px;
        font-size: 18px;
      }
    }
  }
`;

const ImgBox = styled.div`
  padding: 1px;
  margin: auto 5px auto 5px;
`;

const PriceBox = styled.div`
  font-size: 14px;
  margin: 0px 5px 0px 0px;
  .rate {
    color: ${themes.colors.green};
  }
`;
