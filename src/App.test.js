import { render, screen , fireEvent } from '@testing-library/react';
import App from './App';

describe('String Calculator App', () => {
  test('renders input and button', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('displays the sum when valid input is provided', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    fireEvent.change(inputElement, { target: { value: '1,2,3' } });
    fireEvent.click(buttonElement);

    const resultElement = screen.getByText(/sum: 6/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('displays an error message when a negative number is provided', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    fireEvent.change(inputElement, { target: { value: '1,-2,3' } });
    fireEvent.click(buttonElement);

    const errorElement = screen.getByText(/negative numbers not allowed/i);
    expect(errorElement).toBeInTheDocument();
  });
});
