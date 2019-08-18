import React, {Component} from 'react';
import './NotePage.css';
import NoteList from '../NoteList/NoteList';
import NoteContent from '../NoteContent/NoteContent';
import NotefulContext from '../NotefulContext';
import NoteSidebar from '../NoteSidebar/NoteSidebar';

class NotePage extends Component {
    static contextType = NotefulContext;
    render() {
        const note = this.context.notes.filter(note => note.id === this.props.noteId)
        return (
            <main>
                <aside>
                    <NoteSidebar
                        note={note} 
                        onClickBack={this.props.onClickBack}
                    />
                </aside>
                <section>
                    <NoteList note={note} onDelete={this.props.onDelete}/>
                    <NoteContent note={note}/>
                </section>
            </main>
        )
    }
}

export default NotePage