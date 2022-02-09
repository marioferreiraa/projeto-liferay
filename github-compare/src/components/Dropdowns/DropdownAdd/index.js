import ClayDropDown from '@clayui/drop-down'
import { useState, useEffect } from 'react';
import ClayButtonWithIcon from '@clayui/button';
import ClayButton from '@clayui/button';
import spritemap from '../../../images/icons.svg';
import ClayInput from '@clayui/form/lib/Input';
import ClayForm from '@clayui/form';
import './style.css';
import Button from '@clayui/button';

const DropdownAdd = (props) => {
    
    const [active, setActive] = useState(false);
    const [disabledButtonAdd, toggleDisabledButtonAdd] = useState(true);
    const [inputAddValue, setInputAddValue] = useState("");

    const handleChangeAdd = (event) => {
        props.setOnRequestError(false);
        props.setOnRequestWarning(false);
        setInputAddValue(event.target.value)
    }

    const handleCancelClick = () => {
        setActive(false);
        setInputAddValue("");
    }

    useEffect(() => {
        console.log(inputAddValue)
    }, [inputAddValue])

    return(
        <ClayDropDown
            trigger={
                <button className="btn btn-dropdown-add btn-primary" spritemap={spritemap} symbol="plus" >
                    <svg className="lexicon-icon lexicon-icon-plus" role="presentation">
                        <use xlinkHref="/static/media/icons.7496aa165646086102814520cf46fcb4.svg#plus"></use>
                    </svg>
                </button>
            }
            active={active}
            onActiveChange={setActive}
            menuElementAttrs={{
                className: 'my-custom-dropdown-menu',
                id: 'dropdownAdd',
                containerProps: {
                    className: 'dropdown-menu-react-portal-div',
                    id: 'dropdownMenuReactPortalDiv',
                },
            }}
        >
            <ClayDropDown.ItemList>
				<ClayDropDown.Group>
					<h3>New repository</h3>
                    <ClayForm.Group className={`mt-3 ${props.onRequestError && 'has-error'} ${(props.onRequestWarning && !props.onRequestError) && 'has-warning'}`}>
                        <label htmlFor="basicInputText">Repository *</label>
                        <ClayInput
                        id="basicInputText"
                        placeholder=""
                        type="text"
                        value={inputAddValue}
                        onChange={handleChangeAdd}
                        />
                        {props.onRequestError &&
                            <ClayForm.FeedbackGroup>
                                <ClayForm.FeedbackItem>
                                    <ClayForm.FeedbackIndicator
                                    spritemap={spritemap}
                                    symbol="exclamation-full"
                                    />
                                    {"This is a form-feedback-item with a error feedback indicator."}
                                </ClayForm.FeedbackItem>
                            </ClayForm.FeedbackGroup>
                        }
                        {(props.onRequestWarning && !props.onRequestError) &&
                            <ClayForm.FeedbackGroup>
                                <ClayForm.FeedbackItem>
                                    <ClayForm.FeedbackIndicator
                                    spritemap={spritemap}
                                    symbol="warning-full"
                                    />
                                    {"this github is already on the page!"}
                                </ClayForm.FeedbackItem>
                            </ClayForm.FeedbackGroup>
                        }
                    </ClayForm.Group>
                    <ClayButton.Group>
                        <ClayButton displayType="secondary mr-2" onClick={handleCancelClick}>Cancel</ClayButton>
                        <ClayButton disabled={!inputAddValue.length} onClick={props.callbackAdd}>Add</ClayButton>
                    </ClayButton.Group>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
    );
}

export default DropdownAdd;