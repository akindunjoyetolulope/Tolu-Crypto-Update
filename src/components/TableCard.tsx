import * as React from "react";
import styled from "@emotion/styled";
import themes from '../constants/themes';



interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  id: string;
  name?: string;
  imgUrl?: string;
  coinPrice?: string;
  dipStatus?: string;
  action?: React.ReactNode;
  url: string;
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
    url,
    ...rest
  } = props;

  const onItemClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    onAction && onAction(props.id);
  }

  return (
    <Container role="button" {...rest}>
      <ImgBox>
        <img width="50px" height="50px" src={imgUrl} alt="coin pic" />
      </ImgBox>
      <DescriptionBox>
        <div className="first">
          <div>coin Name</div>
          <div>coin price</div>
        </div>
        <div className="second">
          <div>dip status</div>
          <div><button onClick={onItemClicked}>{action || 'Open'}</button></div>
        </div>
      </DescriptionBox>
    </Container>
  );
}

export default TableCard;

const Container = styled.div`
  display: flex;
  padding: 8px;
  border-style: double;
  margin: auto;
  background: ${themes.backgroundColors.lightGrey}
  border: 1px solid #e6e7e7;
  border-radius: 8px;
`;

const ImgBox = styled.div`
 padding:8px;
`;

const DescriptionBox = styled.div`

width:100%;
  .first{
    display:flex;
    justify-content: space-between;
    font-size: 16px;
    padding:6px;
   
  }

  .second{
    display:flex;
    justify-content: space-between;
    padding:6px;
  }
`;
