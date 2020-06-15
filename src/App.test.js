import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});



test('all required fields to show on screen', () => {
  render(<ContactForm />)

  expect(screen.getByTestId('firstNameInput')).toBeVisible()
  expect(screen.getByTestId('lastNameInput')).toBeVisible()
  expect(screen.getByTestId('emailInput')).toBeVisible()
});



test('does text in input field match user text input', () => {
  fireEvent.change((screen.getByTestId('firstNameInput')), { target: { value: 'Testing firstName input field' } })
  expect((screen.getByTestId('firstNameInput')).value).toBe('Testing firstName input field')
});

