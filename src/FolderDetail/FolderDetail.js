import React, {Component} from 'react';
import './FolderDetail.css';

class FolderDetail extends Component {
    render() {
        const folder = this.props.folders.filter(folder => folder.id === this.props.note[0].folderId)
        return (
            <div className="Sidebar__folderdetail">
                <button className="btn__back" onClick={this.props.onClickBack}>Go back</button>
                <h3 className="folderdetail">{folder[0].name}</h3>
            </div>
        )
    }
}

export default FolderDetail