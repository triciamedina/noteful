import React, {Component} from 'react';
import './FolderSidebar.css';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';
import {Link} from 'react-router-dom';

class FolderSidebar extends Component {
    static contextType = NotefulContext;
    render() {
        const {folders} = this.context;
        return (
            <div className='Sidebar__folderlist'>
                <ul className='folderlist'>
                    {folders.map(folder => 
                        <Folder key={folder.id} folder={folder}/>
                    )}
                </ul>
                <Link to={'/add-folder'} className='link__addfolder'>
                    <button className='btn__addfolder'>
                        Add folder
                    </button>
                </Link>
            </div>
        )
    }
}

export default FolderSidebar;