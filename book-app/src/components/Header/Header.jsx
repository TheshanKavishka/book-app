import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>t. s bookHub</h2><br />
                <p className='header-text fs-18 fw-3 text-bold'>Type book name. Click on search button. Then Boom. Here we go!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header