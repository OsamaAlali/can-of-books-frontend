import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export class BeastBooks extends Component {
    render() {
        return (
            <div>
                <h2>My Favorite Books</h2>
                {this.props.booksData.length && this.props.booksData.map((book,idx) => (
                    <div key={idx}>
                        {book.name +'  ' +book.description +' '+book.status}
                        <Button onClick={(e)=> this.props.deleteBook(idx) }>Remove</Button>
                        <Button onClick={e => this.props.bookIndex(idx)} >Update</Button>
                    </div>
                ))}
                      </div>
        )
    }
}

export default BeastBooks;
