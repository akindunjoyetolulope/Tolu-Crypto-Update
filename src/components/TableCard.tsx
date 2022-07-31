import * as React from "react";
import styled from "@emotion/styled";

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  name?: string;
  imgUrl?: string;
  coinPrice?: string;
  dipStatus?: string;
  action?: React.ReactNode;
  onAction?: (id: string) => void;
}

function TableCard(props: Props) {
  const {
    name,
    imgUrl,
    coinPrice,
    dipStatus,
    action,
    onAction,
    ...rest
  } = props;

  return (
    <Container>
      <ImgBox>
        <img src={imgUrl} alt="coin image" />
      </ImgBox>
      <DescriptionBox>
        <div className="first"></div>
        <div className="second"></div>
      </DescriptionBox>
    </Container>
  );
}

export default TableCard;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const ImgBox = styled.div``;
const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
