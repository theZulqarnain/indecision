import React from "react";

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.OptionText} </p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.OptionText);
            }}
        >
            remove
                </button>
    </div>
)

export default Option