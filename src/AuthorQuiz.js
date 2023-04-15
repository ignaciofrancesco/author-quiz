import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function AuthorQuiz() {
  return (
    <div>Author Quiz</div>
  );
}

function Sum(props) {
  return <h1>
    {props.a} + {props.b} =
    {props.a + props.b}
  </h1>;  
}

export default AuthorQuiz;
