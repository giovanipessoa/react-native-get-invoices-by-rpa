import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {expect, jest, test} from '@jest/globals';
import Button from '../components/Button';

test('Render the button correctly', () => {
  const mockFn = jest.fn();
  const {getByText} = render(<Button title="Hello World!" onPress={mockFn} />);
  expect(getByText('Hello World!')).toBeTruthy();
});

test('Call onPress function when button is pressed', () => {
  const mockFn = jest.fn();
  const {getByText} = render(<Button title="Hello World!" onPress={mockFn} />);

  const button = getByText('Hello World!');
  fireEvent.press(button);

  expect(mockFn).toHaveBeenCalledTimes(1);
});
