import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { Toaster } from '../components/ui/Toster';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default preview;
