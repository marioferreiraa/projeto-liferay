import ClayButton from '@clayui/button';
import ClayModal, { useModal } from '@clayui/modal';
import { useState } from 'react';
import spritemap from '../../images/icons.svg';

const ModalDelete = () => {
	const [visible, setVisible] = useState(false);
	const { observer, onClose } = useModal({
		onClose: () => setVisible(false)
	});

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
							<ClayButton.Group spaced>
								<ClayButton onClick={() => setVisible(false)} displayType="secondary">{"cancel"}</ClayButton>
								<ClayButton displayType="warning">{"Delete"}</ClayButton>
							</ClayButton.Group>
						}
					/>
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				{"Open modal"}
			</ClayButton>
		</>
	);
};

export default ModalDelete;