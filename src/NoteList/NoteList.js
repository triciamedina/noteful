import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NoteList.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

class NoteList extends Component {
    static contextType = NotefulContext;
    onDelete = () => {
        this.props.history.push('/');
    }
    render() {
        const {notes} = this.context;
        const folderPath = this.props.match.params.folderId ? true : false;
        const notePath = this.props.match.params.noteId ? true : false;

        const allNotes = notes.map(note => <Note key={note.id} note={note} />)

        const folderNotes = folderPath ? 
            notes
                .filter(note => note.folderId === this.props.match.params.folderId)
                .map(note => <Note key={note.id} note={note} />) 
                : null;

        const singleNote = notePath ? 
            notes
                .filter(note => note.id === this.props.match.params.noteId)
                .map(note => <Note key={note.id} note={note} onDelete={this.onDelete}/>)
            : null;

        return (
            <div className="NoteList__container">
                <ul className="NoteList">
                    {(folderNotes || singleNote) || allNotes}
                    {!notePath && 
                        <Link to={'/add-note'} className='link__addnote'>
                            <button className="btn__addnote">Add note</button>
                        </Link>
                    }
                </ul>
            </div>
        )
    }
}

export default NoteList;