import React from 'react';


const Action = (props) => (
    <div>
        <button className="big-button " disabled={!props.hasOptions} onClick={props.pickAction}>What should I do?</button>
    </div>
)

export default Action;