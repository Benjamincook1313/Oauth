import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";

import Register from "../src/components/auth/Register";

const server = setupServer(
  rest.post("/api/register", (req, res, ctx) => res(ctx.json({message: "success"}))),
);

const user = userEvent.setup();

describe("Register Component", () => {
  it("Renders page", () => {
    render(<Register />);
    expect(screen.getByRole("heading", { name: /register/i })).toBeInTheDocument();
  });

  it("Submits form", async () => {
    render(<Register requestUrl="/api/register" />);
    await user.type(screen.getByLabelText(/email/i, "benji13@gmail.com"));
    await user.type(screen.getByLabelText(/password/i, "Asdf1234!"));
    await user.type(screen.getByLabelText(/verify/i, "Asdf1234!"));
    await user.click(screen.getByRole("button", {name: /submit/i }));
    
  });
})