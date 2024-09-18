import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/RadioGroup/RadioGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  title: 'component/RadioGroup',
  component: RadioGroup,
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
    dir: {
      control: { type: 'inline-radio' },
      options: ['ltr', 'rtl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('option1');

    return (
      <RadioGroup value={value} onValueChange={setValue} {...args}>
        <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        <RadioGroupItem value="option3">Option 3</RadioGroupItem>
      </RadioGroup>
    );
  },
};
