import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""
            />  
            
            <div className="header__input">
                <SearchIcon />

                <input type=""/>

            </div>
            
            </div>

            <div className='header__middle'></div>

            <div className='header__middle'></div>
            
        </div>
    )
}

export default Header
