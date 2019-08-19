import React, {Component} from 'react';
import './NoteSidebar.css';
import NotefulContext from '../NotefulContext';

class NoteSidebar extends Component {
    static contextType = NotefulContext;

    render() {
        const note = this.context.notes.filter(note => note.id === this.props.match.params.noteId);
        const folder = this.context.folders.filter(folder => folder.id === note[0].folderId);
        return (
            <div className="Sidebar__folderdetail">
                <button className="btn__back" onClick={() => this.props.history.goBack()}>Go back</button>
                <h3 className="folderdetail">{folder[0].name}</h3>
            </div>
        )
    }
}

export default NoteSidebar