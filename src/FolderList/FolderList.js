import React, {Component} from 'react';
import './FolderList.css';
import Folder from '../Folder/Folder'

class FolderList extends Component {
    render() {
        return (
            <div className="Sidebar__folderlist">
                <ul className="folderlist">
                    {this.props.folders.map(folder => 
                        <Folder key={folder.id} folder={folder}/>
                    )}
                </ul>
                <button className="btn__addfolder">Add folder</button>
            </div>
        )
    }
}

export default FolderList;