import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Folder.css';
import PropTypes from 'prop-types';

class Folder extends Component {
    render() {
        const {folder} = this.props
        return (
            <NavLink key={folder.id} to={`/folder/${folder.id}`}>
                <li className="folder" key={folder.id}>
                    <h3 className="folder__name">{folder.name}</h3>
                </li>
            </NavLink>
        )
    }
}

Folder.propTypes = {
    folder: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default Folder;