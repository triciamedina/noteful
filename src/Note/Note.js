import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Note.css';
import NotefulContext from '../NotefulContext';

export default class Note extends Component {
    static contextType = NotefulContext;
    static defaultProps = {
        onDelete: () => {},
    }
    deleteNoteRequest = (e) => {
        e.preventDefault();
        const noteId = this.props.note.id
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(data => {
            this.props.onDelete();
            this.context.deleteNote(noteId);
        })
        .catch(error => {
            console.log(error)
        })
    };
    render() {
        const {note} = this.props;
        const options = {year: 'numeric', month: 'short', day: 'numeric'};
        return (
            <li key={note.id}>
                    <Link to={`/note/${note.id}`}><h2 className="Note__title">{note.name}</h2></Link>
                    <div className="Note">
                        <p className="Note__datemodified">Date modified on {
                            new Date(note.modified).toLocaleDateString('en-US', options)
                            }
                        </p>
                        <button className="btn__delete" onClick={this.deleteNoteRequest}>
                            Delete Note
                        </button>
                    </div>
                </li>
            )
    }

}
