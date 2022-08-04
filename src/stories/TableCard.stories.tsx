import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TableCard from "../components/TableCard";

export default {
    title: "Components/TableCard",
    component: TableCard,
  } as ComponentMeta<typeof TableCard>;


const Template: ComponentStory<typeof TableCard> = (args) => <TableCard {...args} />;

export const DefaultTableCard = Template.bind({});

DefaultTableCard.args = {
 id:"bitcoin",
 name:"Bitcoin",
 imgUrl:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
 coinPrice:"$ 1000000",
 dipStatus:"- $70",
 action: 'Open',
 onAction: () => console.log('open!!')
}