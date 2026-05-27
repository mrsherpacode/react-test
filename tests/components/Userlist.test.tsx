import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import User from "../../src/entities";

describe("userList", () => {
  it("should render no users if the use array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render userlist if there is users", () => {
    const users: User[] = [
      { id: 1, name: "sherpa" },
      { id: 2, name: "pasang" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
      expect(link).toHaveTextContent(user.name);
    });
  });
});
