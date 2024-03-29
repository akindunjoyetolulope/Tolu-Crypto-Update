import React from "react";
import themes from "../constants/themes";
import styled from "@emotion/styled";
import "./header.css";
import { Link } from "react-router-dom";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <HeaderEl>
    <div className="wrapper">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <Link to={"/"}>
          <h1>Crypto Update</h1>
        </Link>
      </div>
    </div>
  </HeaderEl>
);

const HeaderEl = styled.header`
  background-color: ${themes.backgroundColors.lightGrey};
  border: ${themes.colors.lightGrey};

  a {
    text-decoration: none;
    color: ${themes.colors.black};
  }
`;
