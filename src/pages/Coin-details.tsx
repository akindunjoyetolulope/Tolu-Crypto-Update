import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import media from "../styles/media";
import themes from "../constants/themes";
import { useEffect, useState } from "react";
import { SingleCoin } from "../api/api";
import axios from "axios";
import { Coin } from "../models/appTheme";
import { numberWithCommas } from "../helpers/helper";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<Coin>();

  // const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(String(id)));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container className="app">
        <div className="first">
          <>
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="150"
              style={{ marginBottom: 20 }}
            />
            <h1 className="heading">{coin?.name}</h1>
            <p className="description">{coin?.description.en.split(". ")[0]}</p>
            <div className="marketData">
              <div className="">
                <h3>
                  Rank: &nbsp; &nbsp;
                  <span style={{ fontSize: "14px" }}>
                    {numberWithCommas(coin?.market_cap_rank)}
                  </span>
                </h3>
              </div>
              <div className="">
                <h3>
                  Current Price: &nbsp; &nbsp;{" "}
                  <span style={{ fontSize: "14px" }}>
                    {numberWithCommas(
                      coin?.market_data.current_price["USD".toLowerCase()]
                    )}
                  </span>
                </h3>
              </div>
              <div className="">
                <h3>
                  Market Cap: &nbsp; &nbsp;
                  <span style={{ fontSize: "14px" }}>
                    {numberWithCommas(
                      coin?.market_data.market_cap["USD".toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    )}
                  </span>{" "}
                </h3>
              </div>
            </div>
          </>
        </div>
        <div className="second">
          {/* <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> */}
        </div>
      </Container>
    </>
  );
};

export default CoinDetails;

const Container = styled.div`
  display: flex;
  padding: auto;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }

  ${media.smallDesktop} {
    flex-direction: column;
    align-items: center;
  }

  .first {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    border-right: 2px solid ${themes.colors.red};
    ${media.mobile} {
      width: 100%;
      border-right: none;
    }
    ${media.smallDesktop} {
      width: 100%;
      border-right: none;
    }

    .heading {
      font-weight: bold;
    }

    .description {
      width: 100%;
      padding: 0.25rem;
      margin-right: 5px;
      padding-bottom: 15px;
      text-align: justify;
    }

    .marketData {
      width: 100%;
      text-align: start;
    }
  }

  .second {
    width: 75%;
    padding: 5px;
    ${media.mobile} {
      width: 100%;
    }
    ${media.smallDesktop} {
      width: 100%;
    }
  }
`;
