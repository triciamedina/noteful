import React, {Component} from 'react';
import './NoteSidebar.css';
import NotefulContext from '../NotefulContext';

class NoteSidebar extends Component {
    static contextType = NotefulContext;

    render() {
        const note = this.context.notes.filter(note => note.id === parseInt(this.props.match.params.note_id));
        const folder = this.context.folders.filter(folder => folder.id === note[0].folder_id);

        return (
            <div className="Sidebar__folderdetail">
                <button className="btn__back" onClick={() => this.props.history.goBack()}>Go back</button>
                <h2 className="folderdetail">{folder[0].name}</h2>
            </div>
        )
    }
}

export default NoteSidebar