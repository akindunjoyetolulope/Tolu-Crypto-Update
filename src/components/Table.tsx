import * as React from "react";
import styled from "@emotion/styled";
import themes from "../constants/themes";
import cx from "classnames";

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
  headings: {
    content: React.ReactNode;
    alighCenter?: boolean;
    alignRight?: boolean;
  }[];
}

function Table(props: React.PropsWithChildren<Props>) {
  const { headings, children } = props;

  return (
    <Container>
      <TableEL>
        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th
                key={i.toString()}
                className={cx({
                  "align-center": heading.alighCenter,
                  "align-right": heading.alignRight,
                })}
              >
                {heading.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableEL>
    </Container>
  );
}

export default Table;

Table.Row = function TableRow(
  props: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>>
) {
  const { children, ...rest } = props;
  return <TableRowEl {...rest}>{children}</TableRowEl>;
};

Table.Cell = function TableCell(
  props: React.PropsWithChildren<
    React.TableHTMLAttributes<HTMLTableCellElement>
  >
) {
  const { children, ...rest } = props;
  return <TableCellEl {...rest}>{children}</TableCellEl>;
};

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow-x: auto;
`;
const TableEL = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  

  thead > tr {
    height: 54px;
  }

  th {
    color: ${themes.colors.red};
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
    padding: 8px;
    white-space: nowrap;

    &.align-center {
      text-align: center;
    }
    &.align-right {
      text-align: right;
    }

    &:first-of-type {
      padding-left: 24px;
    }
  }
`;

const TableRowEl = styled.tr`
  font-family: Arial, Helvetica, sans-serif;
  height: 70px;
  cursor: pointer;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background-color: transparent;

  &:hover {
    background-color: ${themes.backgroundColors.lightGrey};
  }

  &:last-child td:first-of-type {
    border-bottom-left-radius: 8px;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`;

const TableCellEl = styled.td`
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  padding: 8px;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`;
