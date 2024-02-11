import { render } from "@testing-library/react"
import Navigation from "./Navigation"

describe('Navigation', () => {
    it("should render navigation links", ()=> {
        const screen = render(<Navigation/>)

        expect(screen.getByRole("link", {name: "home"})).toHaveAttribute("href", "/")
        expect(screen.getByRole("link", {name: "about"})).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", {name: "reps"})).toHaveAttribute("href", "/reps")
        expect(screen.getByRole("link", {name: "agreements"})).toHaveAttribute("href", "/agreements")
        expect(screen.getByRole("link", {name: "news"})).toHaveAttribute("href", "/news")
    })
})