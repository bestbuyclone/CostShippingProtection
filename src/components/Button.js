import React from 'react';
import './styles.css'
const button = (props) => {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    )
}

export default button;