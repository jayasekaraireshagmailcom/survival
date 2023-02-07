import ActionButton from '../components/ActionButton'
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Calculator", () => {
    it("renders a calculator", () => {
      render(<ActionButton id='actBtn'/>);
      expect(screen.getByTestId("actBtn")).toBeInTheDocument();
    });  
});