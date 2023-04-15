import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>;  
}
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

ReactDOM.render(<Sum a={"b"} b={3} />,
  document.getElementById('root')
);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthorQuiz />
  </React.StrictMode>
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
