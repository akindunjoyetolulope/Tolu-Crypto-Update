import React from "react";
import themes from "../constants/themes";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type AppThemeColor = "primary" | "secondary" 

interface ButtonProps {
  variant: AppThemeColor | "outline";
  size?: "small" | "medium" | "big";
  label: string;
  text?: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { text, children, ...rest } = props;

  return <ButtonEl {...rest}>{text || "button"}</ButtonEl>;
};

export default Button;

const ButtonEl = styled.button<ButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;

  ${(props) => {
    switch (props.variant) {
      case "outline":
        return css`
          color: ${themes.colors.dark};
          > svg,
          > svg g {
            stroke: ${themes.colors.dark};
          }
          border: 1px solid #e6e7e7;
        `;
      case "secondary":
        return css`
          color: ${themes.colors.lightGrey};
          > svg,
          > svg g {
            stroke: ${themes.colors.dark};
          }
        `;
      case "primary":
      default:
        return css`
          color: ${themes.colors.white};
          > svg,
          > svg g {
            stroke: ${themes.colors.white};
          }
        `;
    }
  }};

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
        background-color: ${themes.colors.yellow}
        `
      case "secondary":
        return css`
         background-color: ${themes.colors.dark}
        `
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "big":
        return css`
          border-radius: 15px;
          height: 50px;
          font-size: 1.6rem;
          width: 320px;
          max-width: 100%;
        `;
      case "medium":
        return css`
          border-radius: 10px;
          height: 40px;
          font-size: 1.4rem;
        `;

      case "small":
      default:
        return css`
          border-radius: 8px;
          height: 40px;
          font-size: 1.4rem;
        `;
    }
  }};


`;
