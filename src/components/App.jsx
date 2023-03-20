import React, { useState } from 'react';
import Navbar from './Navbar';
import InputArea from './InputArea';
import Idea from './Idea';
import Footer from './Footer';

function App() {
    const [notes, setNotes] = useState([]);

    function addIdea(note) {
        setNotes(prevValue => {
            return [...prevValue, note]
        })
    };

    function deleteIdea(id) {
        setNotes(prevValue => {
            return prevValue.filter((postItem, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Navbar />
        <InputArea
            onAdd={addIdea} />
        {notes.map((postItem, index) => {
            return <Idea
                key={index}
                id={index}
                title={postItem.title}
                idea={postItem.idea}
                onDelete={deleteIdea}
            />
        })}
        <Footer />
    </div>
};

export default App;