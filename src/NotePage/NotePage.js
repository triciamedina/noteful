import React, {Component} from 'react';
import './NotePage.css';
import FolderDetail from '../FolderDetail/FolderDetail';
import NoteList from '../NoteList/NoteList';
import NoteContent from '../NoteContent/NoteContent';

class NotePage extends Component {
    render() {
        return (
            <main>
                <aside>
                    <FolderDetail 
                        note={this.props.note}
                        folders={this.props.folders}
                        onClickBack={this.props.onClickBack}
                    />
                </aside>
                <section>
                    <NoteList note={this.props.note} />
                    <NoteContent note={this.props.note} />
                </section>
            </main>
        )
    }
}

export default NotePage