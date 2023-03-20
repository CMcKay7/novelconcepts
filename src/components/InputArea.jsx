import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {

    const [fullView, setFullView] = useState(false);

    function expand() {
        setFullView(true);
    }

    const [note, setNote] = useState({
        title: "",
        idea: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    };

    function postIdea(event) {
        props.onAdd(note);
        setNote({
            title: "",
            idea: ""
        });
        event.preventDefault();
    }

    return <div>
        <form className="idea-input">
            {fullView && <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
            />}
            <textarea
                name="idea"
                placeholder="Jot it down..."
                value={note.idea}
                onClick={expand}
                onChange={handleChange}
                rows={fullView ? 3 : 1}
            />
            <Zoom in={fullView}>
                <Fab onClick={postIdea}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
};

export default InputArea;