import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Idea(props) {
    function handleClick() {
        props.onDelete(props.id)
    };

    return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.idea}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>
};

export default Idea;