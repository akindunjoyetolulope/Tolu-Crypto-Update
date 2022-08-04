import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
    title: "Components/Button",
    component: Button,
  } as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({})
Outline.args = {
   variant: 'outline',
   text: "outline"
}

export const Primary = Template.bind({})
Primary.args = {
   variant: 'primary',
   text: "Primary"
   
}

export const Secondary = Template.bind({})
Secondary.args = {
   variant: 'secondary',
   text: "Secondary"
}

export const Small = Template.bind({})
Small.args ={
    variant: 'primary',
    size: 'small',
    text: "small"
}

export const Big = Template.bind({})
Big.args ={
    variant: 'secondary',
    size: 'big',
    text: "big"
}