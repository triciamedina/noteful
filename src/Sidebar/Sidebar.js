import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import FolderList from '../FolderList/FolderList';
import FolderDetail from '../FolderDetail/FolderDetail'

class Sidebar extends Component {
    render() {
        return (
            <aside>
                <Route exact path='/' render={() => 
                    <FolderList folders={this.props.folders}/>
                } />
                <Route path='/folder/:folderId' render={() => 
                    <FolderList folders={this.props.folders}/>
                } />
                <Route path='/note/:noteId' render={() => 
                    <FolderDetail 
                        note={this.props.note}
                        folders={this.props.folders}
                        onClickBack={this.props.onClickBack}
                    />
                } />
            </aside>
        )
    }
}

export default Sidebar