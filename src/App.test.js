import {render, screen} from '@testing-library/react';
import App from './App';

test('Snapshot Testing', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('Check If Hello Is there in the document', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
});

test('Check If BasicComponentIsLoaded', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const linkElement = screen.getByTestId("basicComponent");
  expect(linkElement).toBeInTheDocument();
});