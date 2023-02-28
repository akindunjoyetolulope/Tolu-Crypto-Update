import styled from "@emotion/styled";
import media from "../styles/media";
import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingCoins } from "../api/api";
import { Data } from "../models/appTheme";
import { numberWithCommas } from "../helpers/helper";
import { Link } from "react-router-dom";
import { CryptoState } from "../provider/CryotoProvider";

const TrendingCard = () => {
  const [trending, setTrending] = useState<Data[]>([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <h3>Trending Coins </h3>
      <CardContainer>
        <div className="row">
          {trending.map((data) => (
            <Link key={data.id} to={`/coin/${data.id}`}>
              <div className="card">
                <div className="card-text">
                  <ImgBox>
                    <img
                      width="50px"
                      height="50px"
                      src={data.image}
                      alt="coin pic"
                    />
                  </ImgBox>
                  <p>
                    <span>
                      {data?.symbol.toLocaleUpperCase()}
                      &nbsp;
                      <span
                        style={{
                          color:
                            data?.price_change_percentage_24h >= 0
                              ? "rgb(14, 203, 129)"
                              : "red",
                          fontWeight: 500,
                        }}
                      >
                        {data?.price_change_percentage_24h >= 0 && "+"}
                        {data?.price_change_percentage_24h?.toFixed(2)}%
                      </span>
                      <br />
                    </span>
                    <span style={{ fontSize: 22, fontWeight: 500 }}>
                      {symbol}{" "}
                      {numberWithCommas(data?.current_price.toFixed(2))}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default TrendingCard;

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
    a {
      text-decoration: none;
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
