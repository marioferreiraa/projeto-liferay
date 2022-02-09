import ClayButton from '@clayui/button';
import ClayModal, { useModal } from '@clayui/modal';
import { useState, useEffect } from 'react';
import spritemap from '../../images/icons.svg';
import styled from 'styled-components';
import ClayIcon from '@clayui/icon';

const StyledHeadButton = styled.button`
    background-color: #FFF;
    border: none;
    color: #6B6C7E;
    padding: 0;
    width: 38px;
    height: 24px;
    & svg{
        width: 16px;
        height: 16px;
    }
`;

	const ModalDelete = (props) => {
	const [visible, setVisible] = useState(false);
	const { observer, onClose } = useModal({
		onClose: () => setVisible(false)
	});

	const deleteClick = () => {
		props.deleteCardFromDashboard(props.deleteCardName);
	}

	return (
		<>
			{visible && (
				<ClayModal
					observer={observer}
					size="sm"
					spritemap={spritemap}
					status="warning"
				>
					<ClayModal.Header>{"Delete repository"}</ClayModal.Header>
					<ClayModal.Body>
						<p>{"Are you sure to delete the liferay/senna.js repository?"}</p>
					</ClayModal.Body>
					<ClayModal.Footer
						first={
							<ClayButton.Group spaced className="justify-content-end">
								<ClayButton onClick={() => setVisible(false)} displayType="secondary">{"cancel"}</ClayButton>
								<ClayButton displayType="warning" onClick={deleteClick}>{"Delete"} </ClayButton>
							</ClayButton.Group>
						}
					/>
				</ClayModal>
			)}
			<StyledHeadButton>
				<ClayIcon className="search-icon" onClick={() => setVisible(true)} spritemap={spritemap} symbol="trash" />
			</StyledHeadButton>
		</>
	);
};

export default ModalDelete;