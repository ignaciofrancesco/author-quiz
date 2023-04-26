import"./AddNewAuthor.css"

// for basic react components
import React from 'react';


// DEFAULT EXPORT COMPONENT
function AddNewAuthor({ onAddAuthor }){
    return(
      <div className='AddNewAuthor'>
        <h2>
          Add new author
        </h2>
        <NewAuthorForm onAddAuthor={ onAddAuthor }/>
      </div>
    );
}

// FORM COMPONENT
class NewAuthorForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            newBook: "",
            books: []
        };
        // binds the method to "this" so that we can use "this" inside of it at any moment
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onAddBook = this.onAddBook.bind(this);
    }

    // binds the inputs to the corresponding form state attribute
    onFieldChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    // handles on submit events
    onSubmitHandler(event) {
        // prevents the form from being submited
        event.preventDefault();
        // passes the form data to the parent through a function of props
        this.props.onAddAuthor(this.state);
    }

    onAddBook(event) {
        // when using the setState method, the component is rerendered automatically
        this.setState(
            {
                books: this.state.books.concat([this.state.newBook]),
                newBook: ""
            }
        );
    }

    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <div className='AddNewAuthor__input'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className='AddNewAuthor__input'> 
                    <label htmlFor="imageUrl">Image URL: </label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className='AddNewAuthor__input'>
                    { this.state.books.map((book) => {return <p key={book}>{book}</p>;} ) }
                    <label htmlFor="newBook">New book: </label>
                    <input type="text" name="newBook" value={this.state.newBook} onChange={this.onFieldChange} />
                    <input type="button" value="+" onClick={this.onAddBook} />
                </div>

                <input type="submit" value="Add" />

            </form>
        );
    }
}

  export default AddNewAuthor;