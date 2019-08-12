import React, {Component} from 'react';
import './NotePage.css';

class NotePage extends Component {
    render() {
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        
        return (
            <div className="NotePage">
                <ul className="NoteList">
                    {this.props.note.map(note => 
                        <li key={note.id}>
                            <h2 className="Note__title">{note.name}</h2>
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
                <p className="Note__content">{this.props.note[0].content}</p>
            </div>
        )
    }
}

export default NotePage