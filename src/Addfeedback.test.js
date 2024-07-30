import { render, screen } from '@testing-library/react';
// import AddOrder from './AddOrder';
// import axios from 'axios'
import React from 'react';
import Addfeedback from './Addfeedback';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
 
jest.mock('axios');
jest.mock('react-router-dom');
 

test('renders with correct initial text and changes text on button click', () => {
    // Arrange
    render(<Addfeedback />);

    
   
    // Assert initial state
    const textElement = screen.getByRole('title');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('title');
   
    const labelElement = screen.getByTestId('text-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('rating:');

    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Submit');


});


