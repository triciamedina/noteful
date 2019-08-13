import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

class Note extends Component {
    render() {
        const {note} = this.props;
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        return (
            <li key={note.id}>
                <Link to={`/note/${note.id}`}><h2 className="Note__title">{note.name}</h2></Link>
                <div className="Note">
                    <p className="Note__datemodified">Date modified on {
                        new Date(note.modified).toLocaleDateString('en-US', options)
                        }
                    </p>
                    <button className="btn__delete">Delete Note</button>
                </div>
            </li>
        )
    }
}

export default Note