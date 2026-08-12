import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App'; // Adjust the import path based on your folder structure

describe('App Component', () => {
  
  // 1. Smoke test: Checks if the component crashes during render
  it('renders without crashing', () => {
    render(<App />);
  });

  // 2. Testing content: Checks if a specific text is visible in the document
  it('displays the welcome message', () => {
    render(<App />);
    
    // Replace 'welcome' with text actually present in your App component
    const headingElement = screen.getByText(/welcome/i); 
    
    expect(headingElement).toBeInTheDocument(); // Powered by @testing-library/jest-dom
  });
});
