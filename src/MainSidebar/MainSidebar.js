import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './MainSidebar.css';

class MainSidebar extends Component {
    render() {
        return (
            <div className="Sidebar__container">
                <ul className="Sidebar">
                    {this.props.folders.map(folder => 
                        <NavLink key={folder.id} to={`/folder/${folder.id}`}>
                            <li className="folder" key={folder.id}>
                                <h3 className="folder__name">{folder.name}</h3>
                            </li>
                        </NavLink>
                    )}
                </ul>
                <button className="btn__addfolder">Add folder</button>
            </div>
        )
    }
}

export default MainSidebar