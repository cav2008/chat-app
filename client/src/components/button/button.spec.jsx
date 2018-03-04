import React from 'react';
import Button from './button';

test('first test', () => {
  const button = <Button text="button" />;
  expect(button).toBe(button);
});
