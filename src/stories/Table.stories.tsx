import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "../components/Table";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const TableRows = () => (
  <>
    {[
      ...new Array(5).fill({
        name: "Tolu coin",
        price: "£ 3,44,9975",
        status: "- 4.7777",
        date: "12-12-2022: 14:30",
      }),
    ].map((_, i) => (
      <Table.Row key={i}>
        <Table.Cell>
          <p>{_.name}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{_.price}</p>
        </Table.Cell>

        <Table.Cell>
          <p>{_.status}</p>
        </Table.Cell>

        <Table.Cell>
          <p>{_.date}</p>
        </Table.Cell>
      </Table.Row>
    ))}
  </>
);

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headings: [
    { content: "Crypto Name" },
    { content: "Crypto Price" },
    { content: "DIP Status" },
    { content: "Date" },
  ],
  children: <TableRows />,
};
