import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(){


return(
    <nav className = "header">
        <img className = "header__logo" alt= "logo"  src = "https://cdn.freebiesupply.com/images/large/2x/imdb-logo-transparent.png" />
        <div className = "header__search">
            <input type = "text" className = "header__searchInput"/>
            <SearchIcon className = "header__searchIcon"/>

        </div>
        <div className = "header__nav">
        {/* 1st link */}
        <Link to = "/" className = "header__link">
        <div className = "header__option">
            <span className = "header__optionLineOne">Sign In</span>
            <span className = "header__optionLineTwo">Sign Up</span>

        </div>
        </Link>
        {/* 2nd link */}
        <Link to = "/" className = "header__link">
        <div className = "header__option">
            <span className = "header__optionLineOne">IMBd</span>
            <span className = "header__optionLineTwo">Pro</span>
        </div>
        </Link>
        </div>
    </nav>
)
}
export default Header;