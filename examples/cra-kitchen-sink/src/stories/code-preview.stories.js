import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import React from 'react';

export const usingArrowFunction = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="yolo">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const alsoUsingArrowFunction = () => {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="yolo">
        😀 😎 👍 💯
      </span>
    </Button>
  );
};

export function regularOldFunction() {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="yolo">
        😀 😎 👍 💯
      </span>
    </Button>
  );
}

export default {
  title: 'Code preview',
  component: Button,
};
