import React, {Component} from 'react';
import './NoteList.css';
import Note from '../Note/Note'

class NoteList extends Component {
    render() {
        return (
            <div className="MainPage">
                <ul className="NoteList">
                    {this.props.notes.map(note => 
                        <Note key={note.id} note={note} />
                    )}
                </ul>
                <button className="btn__addnote">Add note</button>
            </div>
        )
    }
}

export default NoteList