import React, {Component} from 'react';
import './NoteContent.css';

class NoteContent extends Component {
    render() {
        const {note} = this.props;
        return (
            <div>
                <p className="Note__content">{note[0].content}</p>
            </div>
        )
    }
}

export default NoteContent