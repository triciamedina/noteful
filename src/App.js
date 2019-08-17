import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage'
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import STORE from './dummy-store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes
    }
  }
  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
          <Route exact path='/' render={() =>
            <MainPage folders={this.state.folders} notes={this.state.notes} />
          }/>
          <Route path='/folder/:folderId' render={(routerProps) => 
            <FolderPage folders={this.state.folders} notes={this.state.notes.filter(note => note.folderId === routerProps.match.params.folderId)}/>
          }/>
          <Route path='/note/:noteId' render={(routerProps) => {
            return <NotePage 
              note={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} 
              folders={this.state.folders}
              onClickBack={() => routerProps.history.goBack()}
            />}
          }/>
      </div>
    );
  }
}

export default App;