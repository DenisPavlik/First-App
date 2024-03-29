// import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without craching', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})