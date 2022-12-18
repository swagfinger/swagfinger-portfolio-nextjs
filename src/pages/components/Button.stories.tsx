// Button.stories.ts|tsx

import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => <Button>Button</Button>;