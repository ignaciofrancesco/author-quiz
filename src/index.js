import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import * as _ from 'underscore';





// CONDITIONAL DISPLAY EXAMPLE

function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>;  
}
// prop type validation 
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

function ConditionalDisplay(props) {
    return <div>
        {props.isVisible ? props.children : null}
    </div>;
}
ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

// model data
const state = {
    showSum: true
};

function render() {
    ReactDOM.render(
        <ConditionalDisplay isVisible={state.showSum}>
            <h1>A <span>sum</span></h1>
            <Sum a={1} b={2} />
        </ConditionalDisplay>,
        document.getElementById('root')
    );
}

render();

setInterval(() => {
                state.showSum = !state.showSum;
                render();
            },
            1000
);
 

/* 

// CLICKY BUTTONS EXAMPLE

function ClickyButtons({numberOfButtons, onSelection}) {

    const makeButton = (v) => {
        return <button key={ v } id={ v }
                      onClick={ (event) => {
                              onSelection(event.target.id);
                          }
                      }
               >{ v }</button>;
    }

    return <div>
      {_.range(1, numberOfButtons + 1).map(makeButton)}
    </div>;
}

ReactDOM.render(<ClickyButtons numberOfButtons={10} onSelection={value => console.log(value)} />,
                document.getElementById('root')
);


 */

/* 
// CLICKER EXAMPLE

function Clicker({ handleClick }) {
  return <div>
    <button onClick={ (e) => {handleClick('A');} }>A</button>
    <button onClick={ (e) => {handleClick('B');} }>B</button>
    <button onClick={ (e) => {handleClick('C');} }>C</button>
  </div>;
}

ReactDOM.render(
    <Clicker handleClick={ (letter) => {console.log(`${letter} clicked`);} } />,
    document.getElementById('root')
);
 */

/*
// SUM EXAMPLE

// COMPONENT DEFINITION
function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>;  
}
// prop type validation 
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

// COMPONENT RENDERING

const props = {
  a: 1,
  b: 3
};

const element = <Sum {...props} />;

ReactDOM.render(element,
  document.getElementById('root')
);
 */


// AUTHOR QUIZ CODE
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
