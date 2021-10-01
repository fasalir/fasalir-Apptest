import { render, screen } from '@testing-library/react';
import Contacts from './Contacts';

test('renders contacts screen', () => {
  render(<Contacts />);
  const linkElement = screen.getByText(/Save New Contact/i);
  expect(linkElement).toBeInTheDocument();
});
