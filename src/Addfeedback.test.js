import { useNavigate } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Addfeedback from "./Addfeedback";
import { render, screen, act } from "@testing-library/react";
import React from "react";
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
 
const mock = new MockAdapter(axios);
 
const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);
 
afterEach(() => {
    mock.reset();
});

describe('All Test', () => {
    test('render title', () => {
        render(<Addfeedback />);
    const textElement = screen.getByRole('title');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('title');

    })

    test('render title', () => {
        render(<Addfeedback />);
    const labelElement = screen.getByTestId('text-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('rating:');

    })

    test('render title', () => {
        render(<Addfeedback />);
    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Submit');

    })
  
})


    
   
//     // Assert initial state

   





// });




