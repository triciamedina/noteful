import React, {Component} from 'react';
import './NoteContent.css';
import NotefulContext from '../NotefulContext';

class NoteContent extends Component {
    static contextType = NotefulContext;
    render() {
        const note = this.context.notes.filter(note => note.id === this.props.match.params.noteId)
        return (
            <div>
                <p className="Note__content">{note[0].content}</p>
            </div>
        )
    }
}

export default NoteContent