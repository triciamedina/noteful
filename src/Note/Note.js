import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Note.css';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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
            this.setState({
                error: error.message,
              })
        })
    };
    render() {
        const {note} = this.props;
        const options = {year: 'numeric', month: 'short', day: 'numeric'};
        const error = this.state.error 
            ? <p className='deleteNoteError'>An error has occured: {this.state.error}</p> 
            : '';
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
                    {error}
                </div>
            </li>
        )
    }
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        modified: PropTypes.string.isRequired,
        folderId: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func,
}

export default Note;