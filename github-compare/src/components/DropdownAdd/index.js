import ClayDropDown from '@clayui/drop-down'
import { useState } from 'react';
import ClayButtonWithIcon from '@clayui/button';
import ClayButton from '@clayui/button';
import spritemap from '../../images/icons.svg';
import ClayInput from '@clayui/form/lib/Input';
import ClayForm from '@clayui/form';
import './style.css';
import Button from '@clayui/button';

const DropdownAdd = () => {
    const [active, setActive] = useState(false);
    const [disabledButtonAdd, toggleDisabledButtonAdd] = useState(true);

    return(
        <ClayDropDown
            trigger={
                <button className="btn btn-dropdown-add btn-primary" spritemap={spritemap} symbol="plus" >
                    <svg className="lexicon-icon lexicon-icon-plus" role="presentation"><use xlinkHref="/static/media/icons.7496aa165646086102814520cf46fcb4.svg#plus"></use></svg>
                </button>
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
					<h3>New repository</h3>
                    <ClayForm.Group className="mt-3">
                        <label htmlFor="basicInputText">Repository *</label>
                        <ClayInput
                        id="basicInputText"
                        placeholder=""
                        type="text"
                        />
                    </ClayForm.Group>
                    <ClayButton.Group>
                        <ClayButton displayType="secondary mr-2">Cancel</ClayButton>
                        <ClayButton disabled={disabledButtonAdd}>Add</ClayButton>
                    </ClayButton.Group>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
    );
}

export default DropdownAdd;