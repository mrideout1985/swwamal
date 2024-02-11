import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { useMedia } from 'react-use';

// Mocking Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}));

// Mocking react-use
jest.mock('react-use', () => ({
  ...jest.requireActual('react-use'), // This will keep other hooks from react-use as is
  useMedia: jest.fn(), // Mock useMedia specifically
}));

describe('Navigation', () => {
  it("should render mobile navigation when screen is less than 600px", () => {
    (useMedia as jest.Mock).mockImplementation(() => false);

    const screen = render(<Navigation />);

    expect(screen.getByText("MobileNav")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    (useMedia as jest.Mock).mockImplementation(() => true);

    const screen = render(<Navigation />);

    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "about" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "reps" })).toHaveAttribute("href", "/reps");
    expect(screen.getByRole("link", { name: "agreements" })).toHaveAttribute("href", "/agreements");
    expect(screen.getByRole("link", { name: "news" })).toHaveAttribute("href", "/news");
  });
});
