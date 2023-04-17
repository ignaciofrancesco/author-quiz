import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import * as _ from 'underscore';
import {shuffle, sample} from 'underscore';

// DATABASE
// array of authors (object)
const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

// MODEL DATA
// This is the data that is passed through to the Turn component each time to render a new turn in the game.
// To generate the data, we call the function getTurnData each time, passing in the authors array.
// It returns an object with 4 random books, and one author.
const state = {
  turnData:  getTurnData(authors)
};

// FUNCTIONS DEFINITION

function getTurnData() {

  let answerBook = "";

  // gets all of the books
  const allBooks = authors.reduce(
    (accumulatedBooks, currentAuthor) => {
      return accumulatedBooks.concat(currentAuthor.books);
    },
    [] // initial value for accumulating all of the books for each author in an array
  );

  // shuffles books
  const shuffledBooks = shuffle(allBooks);

  // selects the first 4 books
  const firstFourBooks = shuffledBooks.slice(0, 4);

  // selects the book that is gonna be the answer
  answerBook = sample(firstFourBooks);

  // finds the author of the book
  const selectedAuthor = authors.find(
    (author) => {
      return author.books.includes(answerBook);
    }
  );

  return {
    author: selectedAuthor,
    books: firstFourBooks
  }
}

// RENDERING THE APP
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>
);
 





/* 
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
 
 */
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
