import { render, screen } from '@testing-library/react';
import Star from "../components/Star/Star";

test('renders active icon', () => {
  const videoid = 'gh768';
  window.sessionStorage.setItem('react-youtube', JSON.stringify([videoid]));

  render(<Star videoid={videoid} />);
  const starred = screen.getByTestId(/star-icon-active/i);
  expect(starred).toBeInTheDocument();
});