import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("userAccount", () => {
  it("should render the user name", () => {
    const user = { id: 1, name: "Test" };
    render(<UserAccount user={user} />);
    const userName = screen.getByText(user.name);
    expect(userName).toHaveTextContent("Test");
    expect(userName).toBeInTheDocument();
  });

  it("should render Edit buttton if there is a admin", () => {
    const user = { id: 1, name: "Test", isAdmin: true };
    render(<UserAccount user={user} />);
    const admin = screen.queryByRole("button");
    expect(admin).toHaveTextContent("Edit");
    expect(admin).toBeInTheDocument();
  });

  it("should not  render buttton if there is not an admin", () => {
    const user = { id: 1, name: "Test", isAdmin: false };
    render(<UserAccount user={user} />);
    const noAdmin = screen.queryByRole("button");
    expect(noAdmin).not.toBeInTheDocument();
  });
});
