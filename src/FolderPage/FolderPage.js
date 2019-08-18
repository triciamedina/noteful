import React, {Component} from 'react';
import './FolderPage.css';
import NoteList from '../NoteList/NoteList';
import NotefulContext from '../NotefulContext';
import FolderSidebar from '../FolderSidebar/FolderSidebar';

class FolderPage extends Component {
    static contextType = NotefulContext;
    render() {
        const notes = this.context.notes.filter(note => note.folderId === this.props.folderId);
        return (
            <main>
                <aside>
                    <FolderSidebar />
                </aside>
                <section>
                    <NoteList notes={notes}/>
                </section>
            </main>
        )
    }
}

export default FolderPage