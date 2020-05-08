import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    expect(getByText(/checkout form/i)).toBeInTheDocument();
    // failing test
    // expect(getByText(/chekot fo/i)).toBeInTheDocument();
});

test("form can be typed in and submitted", () => {
    const { getByLabelText, getByDisplayValue, getByRole } = render(<CheckoutForm />)

    fireEvent.change(getByLabelText(/first name/i), {target: {value: 'angel' } })
    fireEvent.change(getByLabelText(/last name/i), {target: {value: 'guzman' } })
    fireEvent.change(getByLabelText(/address/i), {target: {value: '1234 lane blvd' } })
    fireEvent.change(getByLabelText(/city/i), {target: {value: 'fairyland' } })
    fireEvent.change(getByLabelText(/state/i), {target: {value: 'olympus' } })
    fireEvent.change(getByLabelText(/zip/i), {target: {value: '1gazillion' } })

    fireEvent.click(getByRole('button', {name: /checkout/i}))

    expect(getByDisplayValue(/angel/i)).toBeInTheDocument();
    expect(getByDisplayValue(/guzman/i)).toBeInTheDocument();
    expect(getByDisplayValue(/1234 lane blvd/i)).toBeInTheDocument();
    expect(getByDisplayValue(/fairyland/i)).toBeInTheDocument();
    expect(getByDisplayValue(/olympus/i)).toBeInTheDocument();
    expect(getByDisplayValue(/1gazillion/i)).toBeInTheDocument();
    // failing test
    // expect(getByDisplayValue(/david/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByRole, getByTestId } = render(<CheckoutForm />)

    fireEvent.click(getByRole('button', {name: /checkout/i}))

    expect(getByTestId(/name/i)).toBeInTheDocument();
    expect(getByTestId(/address/i)).toBeInTheDocument();
    expect(getByTestId(/location/i)).toBeInTheDocument();
    // failing test
    // expect(getByTestId(/firstname/i)).toBeInTheDocument();
});
