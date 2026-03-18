import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../../src/pages/ContactPage';
import { BrowserRouter } from 'react-router-dom';

describe('ContactPage Component', () => {
  it('renders all form fields correctly', () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Course of interest/i)).toBeInTheDocument();
    expect(screen.getByText(/Room preference/i)).toBeInTheDocument();
    expect(screen.getByText(/Yoga experience/i)).toBeInTheDocument();
  });

  it('shows error if captcha is incorrect', async () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );

    const captchaLabel = await screen.findByText(/Solve this: (\d+) \+ (\d+)/i);
    // Find numbers from label
    const match = captchaLabel.textContent?.match(/(\d+) \+ (\d+)/);
    if (!match) throw new Error('Captcha label not found');

    const captchaInput = screen.getByPlaceholderText(/Enter answer/i);
    fireEvent.change(captchaInput, { target: { value: '999' } });

    const form = screen.getByTestId('contact-form');
    fireEvent.submit(form);

    // Error message should appear
    expect(await screen.findByText(/Incorrect answer/i, {}, { timeout: 3000 })).toBeInTheDocument();
  });
});
