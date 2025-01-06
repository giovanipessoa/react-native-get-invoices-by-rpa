import React from 'react';
import {render} from '@testing-library/react-native';
import {expect, jest, test} from '@jest/globals';
import App from '../App';

test('Render the initial screen correctly', () => {
  const {getByText} = render(<App />);
  expect(getByText('Navigation')).toBeTruthy();
});
