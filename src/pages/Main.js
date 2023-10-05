import React from 'react';
import { Navbar, NavbarBrand, Dropdown, NavItem ,PageItem,Pagination,PaginationItem} from 'react-bootstrap';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';
import '../App.css'

function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <PopularMoviesList/>
        <Footer/>
    </>
  );
}

function Header(){
    return(
    <div classNam="row d-flex justify-content-center"  className='hedear' style={{background:'yellow'}}>
    <Navbar  expand="lg" className='mx-3'>
        <Logo/>
        <Options/>
    </Navbar>
    </div>
    )
}
function Logo(){
    return(<div className='col-6 d-flex justify-content-start'>
      <NavbarBrand className="Logo" href="#home">Movie App</NavbarBrand>
    </div>)
}
function Options() {
    return(
        <div  className='col-6 d-flex justify-content-end'>
        <Dropdown className='d-inline m-2 '>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-custom-components">
                En
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">En</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ar</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <NavItem className='d-inline mx-2 p-2'><AiOutlineHeart/>Watched List</NavItem>
      </div>
    )
}

function Search(){
    const [query, setQuery] = useState("");
    return(
        <div className='col-9 p-2 m-2 text-center'>
            <input
            className="border border-none  w-100"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) =>{ setQuery(e.target.value)}}
            />
        </div>
    )
}

function Hero(){
    return(
        <div className='p-5 m-4' style={{background:'gray'}}>
            <h2>Welcom to our Movie App</h2>
            <p>Find your favorite movie between milions</p>
            <div className='search d-flex justify-content-center align-items-center'>
                <Search/>
                <button className='d-inline btn btn-warning'>Search</button>
            </div>
        </div>
    )

}
function PopularMoviesList(){
    return(
        <div className='m-4' >
            <h2>Popular Movies</h2>
            {/* here will put the data i take from the api  */}
            
            <div className='row d-flex justify-content-center '>
            {Array.from({ length: 15 }).map((_, i) => (
                <Card key={i} />
            ))}
            </div>
        </div>
    )
}
function Card(){
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
