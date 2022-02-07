import ClayNav from '@clayui/nav';
import ClayInput from '@clayui/form/lib/Input';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayIcon, { ClayIconSpriteContext } from '@clayui/icon';

import "@clayui/css/lib/css/atlas.css";
import './style.css';
import { useEffect } from 'react';


import logo from '../../images/logo_github.svg';
import spritemap from '../../images/icons.svg';
import FiltersAndOrder from '../Dropdown/FiltersAndOrder';


const NavBar = () => { 
    
    return(

        <div className="container">
            <ClayNav>
                <ul className="navbar-nav d-flex justify-content-between col-md-3">
                    <li className="nav-item">
                        <img className="logo" src={logo} />
                    </li>
                    <li className="nav-item">
                        <span>
                            Github Compare
                        </span>
                    </li>
                    <li className="nav-item">
                        <FiltersAndOrder />
                    </li>
                </ul>
                <div className="navbar-form d-flex col-md-6">
                    <form className="d-flex align-items-center"> 
                        <ClayInput placeholder="Search" type="text" />    
                        <ClayIcon className="search-icon" spritemap={spritemap} symbol="search" />
                    </form>
                </div>
                <ul className="navbar-nav d-flex justify-content-between col-md-2">
                    <li className="nav-item">
                        <ClayButtonWithIcon className="border-0" displayType="secondary" spritemap={spritemap} symbol="star-o" />
                    </li>
                    <li className="nav-item">
                            <ClayButtonWithIcon className="border-0" displayType="secondary" spritemap={spritemap} symbol="adjust" />
                    </li>
                    <li className="nav-item">
                            <ClayButtonWithIcon className="border-0" displayType="secondary" spritemap={spritemap} symbol="cards2" />
                    </li>
                    <li className="nav-item">
                            <ClayButtonWithIcon className="" spritemap={spritemap} symbol="plus" />
                    </li>
                </ul>
            </ClayNav>
        </div>
    );
}

export default NavBar;