import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleSelectedOptions}
        contentLabel="selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleSelectedOptions}>Okey</button>
    </Modal>
)
    


export default OptionModal