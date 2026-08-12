import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the heading', () => {
    render(<App />);

    const headingElement = screen.getByText(/get started/i);

    expect(headingElement).toBeInTheDocument();
  });
});