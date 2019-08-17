import React, {Component} from 'react';
import './FolderPage.css';
import FolderList from '../FolderList/FolderList';
import NoteList from '../NoteList/NoteList'

class FolderPage extends Component {
    render() {
        return (
            <main>
                <aside>
                    <FolderList folders={this.props.folders}/>
                </aside>
                <section>
                    <NoteList notes={this.props.notes} />
                </section>
            </main>
        )
    }
}

export default FolderPage