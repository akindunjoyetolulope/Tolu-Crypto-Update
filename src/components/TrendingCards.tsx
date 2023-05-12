import styled from "@emotion/styled";
import media from "../styles/media";
import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingCoins } from "../api/api";
import { Data } from "../models/appTheme";
import { numberWithCommas } from "../helpers/helper";
import { Link } from "react-router-dom";
import { CryptoState } from "../provider/CryotoProvider";
import themes from "../constants/themes";

const TrendingCard = () => {
  const [trending, setTrending] = useState<Data[]>([]);
  const { currency, symbol } = CryptoState();
  const [loading, setLoading] = useState(false);

  const fetchTrendingCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <Container>
      <h3>Trending Coins </h3>
      <CardContainer>
        {loading ? (
          <div className="row">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <div className="card-loader" key={i}></div>
              ))}
          </div>
        ) : (
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
        )}
      </CardContainer>
    </Container>
  );
};

export default TrendingCard;

const Container = styled.div`
  margin-top: 2rem;
`;

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
    margin-top: 2rem;
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

  .card-loader {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }
    border-radius: 12px;
    background: ${themes.colors.lightGrey};
    color: ${themes.colors.black};
    border: 1px solid ${themes.colors.red};
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
    .card-loader {
      border-radius: 12px;
      background: ${themes.colors.lightGrey};
      color: ${themes.colors.black};
      border: 1px solid ${themes.colors.red};
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
  .card {
    border-radius: 12px;
    background: ${themes.colors.black};
    color: ${themes.colors.white};
    width: 320px;
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
