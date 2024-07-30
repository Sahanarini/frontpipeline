import { useNavigate } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Addstudent from "./Addstudent";
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
        render(<Addstudent />);
        const textElement = screen.getByRole('text-name');
            expect(textElement).toBeInTheDocument();
            expect(textElement).toHaveTextContent('Name:');
    })

    test('render title', () => {
        render(<Addstudent />);
        
        const buttonElement = screen.getByRole('sub-id');
            expect(buttonElement).toBeInTheDocument();
            expect(buttonElement).toHaveTextContent('Submit');
    })

    test('render title', () => {
        render(<Addstudent />);
        
        const labelElement = screen.getByTestId('feed');
            expect(labelElement).toBeInTheDocument();
            expect(labelElement).toHaveTextContent('feedback:');
    })

})
 

// test('renders with correct initial text and changes text on button click', () => {
//     // Arrange
//     

//     
   
//     const labelElement = screen.getByTestId('text-element');
//     expect(labelElement).toBeInTheDocument();
//     expect(labelElement).toHaveTextContent('rating:');

//     const buttonElement = screen.getByTestId('button-element');
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveTextContent('Submit');
   
    

// });