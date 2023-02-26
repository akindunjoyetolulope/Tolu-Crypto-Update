import { Header } from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "@emotion/styled";
import media from "../styles/media";

// interface Data {
//     data: object[]
// }

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
  return (
    <>
      <Header />
      <div className="app">
        <SubHeader />
        <div>
          <h3>Trending Coins </h3>
          <CardContainer>
            <div className="row">
              {DummyData.map((data) => (
                <div className="card" key={data.id}>
                  <div className="card-text">
                    <ImgBox>
                      <img
                        width="50px"
                        height="50px"
                        src={data.imaUrl}
                        alt="coin pic"
                      />
                    </ImgBox>
                    <p>
                      {data.name} <br /> {data.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default AllCoinPage;

const ImgBox = styled.div`
  padding: 1px;
  margin: auto;
`;

const CardContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  .row {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: 1;
    overflow-y: hidden;
    scrollbar-width: none;
    gap: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  .card {
    border-radius: 12px;
    background: black;
    color: white;
    width: 300px;
    height: 150px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 0;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
  ${media.mobile} {
    .card {
      border-radius: 12px;
      background: black;
      color: white;
      width: 200px;
      height: 200px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      border: 0;
      flex-basis: auto;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
  .card-text {
    text-align: center;
  }
`;
