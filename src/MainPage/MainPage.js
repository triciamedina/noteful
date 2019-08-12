import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {
    render() {
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        
        return (
            <div className="MainPage">
                <ul className="NoteList">
                    {this.props.notes.map(note => 
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
                    )}
                </ul>
                <button className="btn__addnote">Add note</button>
            </div>
        )
    }
}

export default MainPage