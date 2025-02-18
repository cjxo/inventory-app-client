import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileUploader from "../../src/components/FileUploader";

describe("FileUploader Component Testing", () => {
  test("renders correctly", () => {
    render(<FileUploader />);
    
    const para = screen.getByText("Select PNG Image");
    expect(para).toBeInTheDocument();
    
    const file = screen.getByLabelText("Select PNG Image");
    expect(file).toBeInTheDocument();
    
    const button = screen.getByRole("button", { name: "Select PNG File" });
    expect(button).toBeInTheDocument();
  });
  
  test("clicking the button triggers file input click", async () => {
    const user = userEvent.setup();
    render(<FileUploader />);
    
    const mockCreateObjectURL = vi.fn().mockReturnValue('blob:http://localhost/fake-url');
    global.URL.createObjectURL = mockCreateObjectURL;
    
    const button = screen.getByRole("button", { name: "Select PNG File" });
    const file = screen.getByLabelText("Select PNG Image");
    const spy = vi.spyOn(file, "click");
    
    expect(spy).not.toHaveBeenCalled();
    await user.click(button);
    expect(spy).toHaveBeenCalled();
    
    await user.upload(file, new File(['hello'], 'hello.png', {type: 'image/png'}));
    
    const newButton = screen.getByRole("button", { name: "Change PNG File" });
    expect(newButton).toBeInTheDocument();
    
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });
});
