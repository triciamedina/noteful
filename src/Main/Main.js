import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NoteList from '../NoteList/NoteList'
import NoteContent from '../NoteContent/NoteContent'
import './Main.css';

class Main extends Component {
    render() {
        return (
            <section>
                <Route exact path='/' render={() =>
                    <NoteList notes={this.props.notes} />
                }/>
                <Route path='/folder/:folderId' render={(routerProps) =>
                    <NoteList notes={this.props.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />
                }/>
                {/* <Route path='/note/:noteId' render={(routerProps) =>
                    <NoteList note={this.props.note} />
                }/> */}
                <Route path='/note/:noteId' render={() =>
                    <NoteContent note={this.props.note} />
                }/>
            </section>
        )
    }
}

export default Main