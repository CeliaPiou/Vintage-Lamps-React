import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SeConnecter from "../PAGES/CONNEXION/SeConnecter";
import { AuthContext } from "../UTILS/contexts/AuthContext";

describe("SeConnecter Component", () => {
  let mockLogin;

  beforeEach(() => {
    mockLogin = vi.fn();
    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <SeConnecter />
      </AuthContext.Provider>
    );
  });

  test("renders email and password inputs", () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("updates input values on typing", async () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("calls login on submit", async () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");
    await userEvent.click(button);

    expect(mockLogin).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123"
    });
  });

  test("displays error message if login fails", async () => {
    // On simule une erreur renvoyée par login
    mockLogin.mockImplementation(() => {
      throw { response: { data: { error: { message: "Invalid credentials" } } } };
    });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailInput, "wrong@example.com");
    await userEvent.type(passwordInput, "wrongpass");
    await userEvent.click(button);

    expect(await screen.findByText(/erreur rencontrée : invalid credentials/i)).toBeInTheDocument();
  });
});