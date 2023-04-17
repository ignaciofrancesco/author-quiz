import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';

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

// CENTRAL BEHAVIOUR
function Turn({author, books}){
  return(
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageURL} className="authorimage" alt="author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <p>{title}</p>)}
      </div>
    </div>
  );
}
Turn.propTypes = {
  author: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
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
function AuthorQuiz({turnData}) {
  return (
      <div className="fluid-container">

          <Hero />
          <Turn {...turnData}/>
          <Continue />
          <Footer />

      </div>
  );
}

export default AuthorQuiz;
