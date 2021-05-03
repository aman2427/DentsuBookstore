import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Books = props => (
    <tr>
        <td>{props.books.title}</td>
        <td>{props.books.shortDescription}</td>
        <td>{props.books.isbn}</td>
        <td>{props.books.pageCount}</td>
        <td>
        <Link to={"/"}>Add to Cart</Link>
        </td>
    </tr>
)
export default class bookslist extends Component{
    constructor(props){
        super(props);
        this.state = {books : []};
    } 
    componentDidMount(){
        axios.get('http://localhost:5000/books/')
            .then(response => {
                this.setState({books: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

bookslist(){
    return this.state.books.map(currentbooks => {
        return <Books books = {currentbooks}/>;
    })
}
render() {
    return (
        <div>
        <h3>Books Available</h3>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Title</th>
                    <th>Short Description</th>
                    <th>ISBN</th>
                    <th>PageCount</th>
                    <th>Buy!</th>
                </tr>
            </thead>
            <tbody>
                {this.bookslist()}
            </tbody>
            </table>
        </div>
    )
}
}
