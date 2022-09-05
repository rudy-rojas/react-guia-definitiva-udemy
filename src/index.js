import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Li = ({ children, age, hiLevel, house }) => {
  console.log({ children } + ' ' + { house });
  return (
    <li>{children} - {age} - {hiLevel}</li>
  )
}

const X = () => {
  return (
    <ul>
      <Li
        hiLevel={true}
        age={36}
        house={true}
      >Java</Li>
      <Li
        age={59}
      >Javascript</Li>
      <Li
        house={false}
      >NodeJS</Li>
    </ul>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <X />
  </React.StrictMode>
);

// ReactDOM.render(x, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
