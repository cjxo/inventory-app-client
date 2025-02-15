import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonImage from "../../src/components/ButtonImage";

describe("ButtonImage Component Testing", () => {
  test("renders the image with correct src, alt, width, and height attributes", () => {
    render(
      <ButtonImage
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        alt="A cat"
        width={200}
        height={100}
      />
    );

    const image = screen.getByRole("img", { name: "A cat" });
    expect(image).toHaveAttribute("src", "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg");
    expect(image).toHaveAttribute("alt", "A cat");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "100");
  });

  test("calls the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ButtonImage
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        alt="A cat"
        width={200}
        height={100}
        onClick={onClick}
      />
    );

    const button = screen.getByRole("button", { name: "A cat" });
    expect(onClick).not.toHaveBeenCalled();
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
