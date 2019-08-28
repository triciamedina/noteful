import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Folder.css';
import PropTypes from 'prop-types';

class Folder extends Component {
    render() {
        const {folder} = this.props
        return (
                <li className="folder" key={folder.id}>
                    <NavLink key={folder.id} to={`/folder/${folder.id}`}><h2 className="folder__name">{folder.name}</h2></NavLink>
                </li>
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