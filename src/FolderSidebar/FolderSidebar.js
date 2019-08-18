import React, {Component} from 'react';
import './FolderSidebar.css';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';

class FolderSidebar extends Component {
    static contextType = NotefulContext;
    render() {
        const {folders} = this.context;
        return (
            <div className="Sidebar__folderlist">
                <ul className="folderlist">
                    {folders.map(folder => 
                        <Folder key={folder.id} folder={folder}/>
                    )}
                </ul>
                <button className="btn__addfolder">Add folder</button>
            </div>
        )
    }
}

export default FolderSidebar;