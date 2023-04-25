import './bootstrap.min.css';
import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// HEADER
function Hero(){
  return (
    <div className="row">
      <div className="bg-light p-5 col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown.</p>
      </div>
    </div>
  );
}

function Book({title, onClick}){
  return (
    <div className="answer" onClick={ (syntheticEvent) => onClick(title) }>
      <h4>{title}</h4>
    </div>
  );
}

// THE TURN ITSELF
// we need to provide a unique "key" for each element when we use a collection to create a list.
function Turn({author, books, answerState, onAnswerSelected}){

  function answerStateToBgColor(answerState) {

    // maps the answer state to the right color
    const bgColor = {
      "": "none",
      "correct": "green",
      "wrong": "red"
    };

    return bgColor[answerState];
  }

  return(
    <div className="row turn" style={{ backgroundColor: answerStateToBgColor(answerState) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    imageAttribution: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  answerState: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

// BUTTON TO CONTINUE
function Continue(){

}

// FOOTER
function Footer(){
  return(
    <div id="footer" className="row">
      <div className="row-12">
        <p className="text-muted credit">All images are from <a href="http://www.wikipedia.org" target="_blanc">wikipedia</a> and
        are in the public domain</p>
      </div>
    </div>
  );
}

// THE MAIN COMPONENT
function AuthorQuiz({turnData, answerState, onAnswerSelected}) {
  return (
      <div className="fluid-container">

          <Hero />
          <Turn {...turnData} answerState={answerState} onAnswerSelected={onAnswerSelected}/>
          <Continue />
          <p><Link to="/add-new-author">Add new author</Link></p>
          <Footer />

      </div>
  );
}

export default AuthorQuiz;
