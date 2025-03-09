import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    // console.log(book);
    const { bookId: currentBookId, image } = book;

    return (
        <div className='my-12'>
            <h2> {currentBookId}</h2>
            <img className='w-36' src={image} alt="" />
            <button className="btn btn-outline btn-accent mr-4">Read</button>
            <button className="btn btn-accent">WishList</button>
        </div>
    );
};

export default BookDetail;