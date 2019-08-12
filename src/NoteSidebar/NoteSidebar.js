import React, {Component} from 'react';
import './NoteSidebar.css';

class NoteSidebar extends Component {
    render() {
        const folder = this.props.folders.filter(folder => folder.id === this.props.note[0].folderId)
        
        return (
            <div className="Sidebar__container">
                <button className="btn__back" onClick={this.props.onClickBack}>Go back</button>
                <h3 className="NotePage__folder">{folder[0].name}</h3>
            </div>
        )
    }
}

export default NoteSidebar