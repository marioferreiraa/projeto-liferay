import ClayDropDown from '@clayui/drop-down'
import { useState } from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import spritemap from '../../../images/icons.svg';

import './style.css'

const FiltersAndOrder = () => {

    const [active, setActive] = useState(false);

    return (
		<ClayDropDown
			trigger={
				<ClayButton className="btn btn-dropdown">
					Filter and order
					<span className="ml-2">
						<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
					</span>
				</ClayButton>
			}
			active={active}
			onActiveChange={setActive}
			menuElementAttrs={{
				className: 'my-custom-dropdown-menu',
				containerProps: {
					className: 'dropdown-menu-react-portal-div',
					id: 'dropdownMenuReactPortalDiv',
				},
			}}
		>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group>
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}

export default FiltersAndOrder;