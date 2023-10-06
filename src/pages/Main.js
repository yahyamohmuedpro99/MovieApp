import React from 'react';
import { Pagination} from 'react-bootstrap';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';
import '../App.css'
import Hero from '../components/hero'
function App() {
  return (
    <>
        <Hero/>
        <PopularMoviesList/>
        <Footer/>
    </>
  );
}




function PopularMoviesList(){
    return(
        <div className='m-4' >
            <h2>Popular Movies</h2>
            {/* here will put the data i take from the api  */}
            
            <div className='row d-flex justify-content-center '>
            {Array.from({ length: 15 }).map((_, i) => (
                <MovieCard key={i} />
            ))}
            </div>
        </div>
    )
}
function MovieCard(){
    return(
    <div xs={6}className="card m-1 col-sm-3 col-md-3 col-lg-2" >
        <img className="card-img-top" src="https://via.placeholder.com/300x500" alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <small>2023 <span className='d-inline d-flex justify-content-end'><AiFillHeart/></span></small>
        </div>
        
    </div>
    )
}
function Footer(){
    return(
        <div className='footer d-flex justify-content-center '>
            <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
            </Pagination>
        </div>
    )
}
export default App;
