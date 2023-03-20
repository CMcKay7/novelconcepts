import React from 'react';
import BookIcon from '@mui/icons-material/Book';

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="nav-title"><BookIcon />Novel Concepts</a>
            <ul>
                <li className="active">
                    <a href="/create">Create</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;