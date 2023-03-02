import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import themes from "../constants/themes";
import media from "../styles/media";

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  id: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  itemTitle: React.ReactNode;
  subTitle: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  onAction?: (id: string) => void;
  url?: string;
}

export default function ResourceItem(props: Props) {
  const {
    imageUrl,
    itemTitle,
    subTitle,
    description,
    onAction,
    action,
    url,
    icon,
    ...rest
  } = props;

  const onItemClicked = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (url) return;

    e.stopPropagation();
    onAction && onAction(props.id);
  };

  return (
    <ResourceEl
      role="button"
      onClick={onItemClicked}
      as={url ? Link : "div"}
      to={url}
      {...rest}
    >
      {icon && <div className="icon">{icon}</div>}
      {imageUrl && (
        <div className="icon">
          <img src={imageUrl} alt="" />
        </div>
      )}
      <div style={{ width: "100%", flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.125rem",
          }}
        >
          {typeof itemTitle === "string" ? (
            <div style={{ minWidth: "0px", flexBasis: "60%" }}>
              <p
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {itemTitle}
              </p>
            </div>
          ) : (
            itemTitle
          )}

          {typeof subTitle ? (
            <p style={{ whiteSpace: "nowrap" }}>{subTitle}</p>
          ) : (
            subTitle
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          {typeof description === "string" ? <p>{description}</p> : description}

          <Open onClick={onItemClicked}>
            {React.isValidElement(action) ? action : <p>{action || "Open"}</p>}
          </Open>
        </div>
      </div>
    </ResourceEl>
  );
}

const ResourceEl = styled.div<{ to?: string }>`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 74px;
  width: 100%;
  background-color: transparent;
  border-top: 1px solid ${themes.colors.lightGrey};

  p {
    font-size: 16px;
  }

  .icon {
    width: 34px;
    margin-right: 10px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 100%;
      border-radius: 18px;
      margin: 0 auto;
    }
  }

  &:first-of-type {
    border-top: none;
  }
`;

const Open = styled.button`
  border: none;
  color: ${themes.colors.prime};
  cursor: pointer;
  background-color: transparent;
`;

export const ResourceItemWrapper = styled.div`
  margin-top: 2rem;
  border: 1px solid #e6e7e7;
  border-radius: 8px;
  display: none;
  ${media.mobile} {
    display: block;
  }
`;
