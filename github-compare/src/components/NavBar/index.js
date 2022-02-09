import ClayNav from '@clayui/nav';
import ClayInput from '@clayui/form/lib/Input';
import { ClayButtonWithIcon } from '@clayui/button';
import ClayIcon from '@clayui/icon';

import "@clayui/css/lib/css/atlas.css";
import './style.css';
import { useEffect, useState } from 'react';


import logo from '../../images/logo_github.svg';
import spritemap from '../../images/icons.svg';
import FiltersAndOrder from '../Dropdowns/DropdownFilterAndOrder';
import DropdownAdd from '../Dropdowns/DropdownAdd';
import DropdownToggleLayout from '../Dropdowns/DropdownToggleLayout';


const NavBar = (props) => {

    const [inputFilter, setInputFilter] = useState("");
    const [filterFavoriteRepositories, setFilterFavoriteRepositories] = useState(false)

    const handleFilterChange = (event) => {
        props.setFilterWithSearch(event.target.value)
        setInputFilter(event.target.value);
    }

    const handleFilterFavorite = () => {
        setFilterFavoriteRepositories(!filterFavoriteRepositories);
        if (!filterFavoriteRepositories) {
            document.querySelectorAll('.favorite-button .lexicon-icon-star-o').forEach((item)=>{
                console.log(item.closest('.item-content').classList.add("hide"))
            })
        }else{
            document.querySelectorAll('.favorite-button .lexicon-icon-star-o').forEach((item)=>{
                console.log(item.closest('.item-content').classList.remove("hide"))
            })
        }
    }

    return (

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
                        <FiltersAndOrder orderArray={props.orderArray} />
                    </li>
                </ul>
                <div className="navbar-form d-flex col-md-6">
                    <form className="d-flex align-items-center">
                        <ClayInput placeholder="Search" type="text" id="search" value={inputFilter} onChange={handleFilterChange} />
                        <ClayIcon className="search-icon" spritemap={spritemap} symbol="search" />
                    </form>
                </div>
                <ul className="navbar-nav d-flex justify-content-between col-md-2">
                    <li className="nav-item">
                        <ClayButtonWithIcon onClick={handleFilterFavorite} className="border-0" displayType="secondary" spritemap={spritemap} symbol={!filterFavoriteRepositories ? "star-o" : "star"} />
                    </li>
                    <li className="nav-item">
                        <ClayButtonWithIcon className="border-0" displayType="secondary" spritemap={spritemap} symbol="adjust" />
                    </li>
                    <li className="nav-item">
                        <DropdownToggleLayout setListLayout={props.setListLayout}></DropdownToggleLayout>
                    </li>
                    <li className="nav-item">
                        <DropdownAdd onRequestError={props.onRequestError}
                            onRequestWarning={props.onRequestWarning}
                            setOnRequestWarning={props.setOnRequestWarning}
                            setOnRequestError={props.setOnRequestError}
                            callbackAdd={props.callbackAdd} />
                    </li>
                </ul>
            </ClayNav>
        </div>
    );
}

export default NavBar;