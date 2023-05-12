import Table from "./Table";
import media from "../styles/media";
import styled from "@emotion/styled";

export default function TableSkeleton() {
  const list = new Array(8).fill(0).map((_, i) => i + 1);

  return (
    <TableContainer>
      <Table
        headings={[
          { content: <Pill style={{ width: "66px" }} /> },
          { content: <Pill style={{ width: "150px" }} /> },
          { content: <Pill style={{ width: "52px" }} /> },
          { content: <Pill style={{ width: "103px" }} /> },
          { content: <Pill style={{ width: "60px" }} /> },
        ]}
      >
        {list.map((_, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              <Pill style={{ width: "177px" }} />
            </Table.Cell>
            <Table.Cell>
              <Pill style={{ width: "77px" }} />
            </Table.Cell>
            <Table.Cell>
              <Pill style={{ width: "130px" }} />
            </Table.Cell>
            <Table.Cell>
              <Pill style={{ width: "175px" }} />
            </Table.Cell>
            <Table.Cell>
              <Pill style={{ width: "55px" }} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  & {
    flex: 1 1 0%;
  }

  ${media.mobile} {
    display: none;
  }

  tr {
    border-top: none;
  }

  tbody tr:first-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

const Pill = styled.div`
  background-color: #eaeaea;
  height: 11.76%;
  border-radius: 16.8px;
`;
