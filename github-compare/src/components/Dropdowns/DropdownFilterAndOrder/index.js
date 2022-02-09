import ClayDropDown from '@clayui/drop-down'
import { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import spritemap from '../../../images/icons.svg';

import './style.css'

const FiltersAndOrder = (props) => {

    const [active, setActive] = useState(false);
	const [orderBy, setOrderBy] = useState("");
	
	const order = (string) => {
		props.orderArray(string)
	}

	useEffect(()=>{
		order(orderBy);
	},[orderBy])

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
					<ClayDropDown.Item href={"#stars"} key={"stars"} onClick={()=>setOrderBy("stars")}>
						{"Stars"}
					</ClayDropDown.Item>
					<ClayDropDown.Item href={"#forks"} key={"forks"} onClick={()=>setOrderBy("forks")}>
						{"Forks"}
					</ClayDropDown.Item>
					<ClayDropDown.Item href={"#open-issues"} key={"open issues"} onClick={()=>setOrderBy("openIssues")}>
						{"Open Issues"}
					</ClayDropDown.Item>
					<ClayDropDown.Item href={"#age"} key={"age"} onClick={()=>setOrderBy("age")}>
						{"Age"}
					</ClayDropDown.Item>
					<ClayDropDown.Item href={"#last-commit"} key={"last-commit"} onClick={()=>setOrderBy("lastCommitDate")}>
						{"Last commit"}
					</ClayDropDown.Item>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}

export default FiltersAndOrder;