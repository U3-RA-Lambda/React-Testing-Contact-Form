import React from "react";
import { render } from "@testing-library/react";
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
})


// onsubmit/handlesubmit

//contact form

// What would be the worst part of your app to break? The submission part

//Choose an interaction, write step-by-step to manually test it
  // fill form inputs, click submit button, see item added to list


