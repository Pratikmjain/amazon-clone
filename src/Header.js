import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';


function Header() {
        const [{ basket, user }] = useStateValue();
        const login = () => {
                if (user) {
                        auth.signOut();
                }
        }
        return (
                <nav className="header">
                        {/* logo on hte left --img */}
                        <Link to="/">
                                <img className="header__logo"
                                        src="https://www.pngmart.com/files/ Amazon-Logo-Download-PNG-Image.png"
                                        alt='' />
                        </Link>
                        {/* Search box */}

                        <div className="header__search">
                                <input type="text" className="header__searchInput" />

                                <SearchIcon className="header__searchIcon" />
                        </div>

                        {/* 3 links in Right */}
                        <div className="header__nav">
                                {/* link1 */}
                                <Link to={!user && "/login"} className="header__link">
                                        <div onClick={login} className="header__Option">
                                                <span className="header__optionLineOne">Hello{user?.email} </span>
                                                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                        </div>
                                </Link>


                                {/* link2 */}
                                <Link to="/" className="header__link">
                                        <div className="header__Option">
                                                <span className="header__optionLineOne">Returns</span>
                                                <span className="header__optionLineTwo">& Orders</span>
                                        </div>
                                </Link>


                                {/* link3 */}
                                <Link to="/" className="header__link">
                                        <div className="header__Option">
                                                <span className="header__optionLineOne">Your</span>
                                                <span className="header__optionLineTwo">Prime</span>
                                        </div>
                                </Link>



                                {/* link4 */}

                                <Link to="/checkout" className="header__link">
                                        <div className="header__optionBasket">
                                                {/* Shopping basket icon */}
                                                <ShoppingBasket />
                                                {/* Number of items in the basket */}
                                                <span className="header__optionLineTwo header__BasketCount">{basket?.length}</span>
                                        </div>

                                </Link>

                        </div>

                        {/* Basket icon with number */}

                </nav>
        );

}

export default Header;
