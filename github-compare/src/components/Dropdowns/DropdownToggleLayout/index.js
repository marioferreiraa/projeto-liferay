import ClayDropDown from '@clayui/drop-down'
import ClayIcon from '@clayui/icon';
import { useState } from 'react';
import spritemap from '../../../images/icons.svg';
import './style.css';

const DropdownToggleLayout = () => {

    const [active, setActive] = useState(false);

    return (
            <ClayDropDown
                trigger={
                    <button className="btn btn-dropdown-toggle-layout btn-secondary border-0">
                        <svg className="lexicon-icon lexicon-icon-cards2" role="presentation">
                            <use xlinkHref="/static/media/icons.7496aa165646086102814520cf46fcb4.svg#cards2"></use>
                        </svg>
                    </button>
                }
                active={active}
                onActiveChange={setActive}
                menuElementAttrs={{
                    className: 'my-custom-dropdown-menu',
                    id: 'dropdownToggleLayout',
                    containerProps: {
                        className: 'dropdown-menu-react-portal-div',
                    },
                }}
            >
                <ClayDropDown.ItemList>
                    <ClayDropDown.Group>
                        <ClayDropDown.Item>
                            <ClayIcon className="mr-2" spritemap={spritemap} symbol="cards2" />
                            Cards
                        </ClayDropDown.Item>
                        <ClayDropDown.Item>
                            <ClayIcon className="mr-2" spritemap={spritemap} symbol="cards-full" />
                            List
                        </ClayDropDown.Item>
                    </ClayDropDown.Group>
                </ClayDropDown.ItemList>
            </ClayDropDown>
	);
}

export default DropdownToggleLayout;