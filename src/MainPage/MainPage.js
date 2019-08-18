import React, {Component} from 'react';
import './MainPage.css';
import FolderList from '../FolderList/FolderList';
import NoteList from '../NoteList/NoteList';
import NotefulContext from '../NotefulContext';

class MainPage extends Component {
    static contextType = NotefulContext;
    render() {
        const {notes} = this.context;
        return (
            <main>
                <aside>
                    <FolderList />
                </aside>
                <section>
                    <NoteList notes={notes}/>
                </section>
            </main>
        )
    }
}

export default MainPage