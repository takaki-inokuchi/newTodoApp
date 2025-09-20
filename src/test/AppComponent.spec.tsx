jest.mock("../supabaseClient");

import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("title", () => {
  it("should render app title", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("シン・学習記録アプリ")).toBeInTheDocument();
    });
  });
});