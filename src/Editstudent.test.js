import { render, screen } from '@testing-library/react';
// import AddOrder from './AddOrder';
// import axios from 'axios'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Editstudent from './Editstudent';
 
jest.mock('axios');
jest.mock('react-router-dom');
 

test('renders with correct initial text and changes text on button click', () => {
    // Arrange
    render(<Editstudent />);
    // Assert initial state
    const textElement = screen.getByRole('name');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('name');
   
    const labelElement = screen.getByTestId('text-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('ID');

    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Update');


});
