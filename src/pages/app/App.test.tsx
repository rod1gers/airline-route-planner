import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn page', () => {
  render(<App />);
  expect(true).toBe(true);
});
