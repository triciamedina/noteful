import React, {Component} from 'react';
import './NoteList.css';
import Note from '../Note/Note'

class NoteList extends Component {
    render() {
        return (
            <div className="NoteList__container">
                {this.props.notes && (
                    <div>
                        <ul className="NoteList">
                            {this.props.notes.map(note => <Note key={note.id} note={note} />)}
                        </ul>
                        <button className="btn__addnote">Add note</button>
                    </div>
                )}
                {this.props.note && (
                    <div>
                        <ul className="NoteList">
                            {this.props.note.map(note => <Note key={note.id} note={note} />)}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default NoteList