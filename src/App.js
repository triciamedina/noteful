import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main'
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
        <main>
          <Route exact path='/' render={() =>
            <Sidebar folders={this.state.folders}/>
          }/>
          <Route path='/folder/:folderId' render={() => 
            <Sidebar folders={this.state.folders}/>
          }/>
          <Route path='/note/:noteId' render={(routerProps) => {
            return <Sidebar 
              note={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} 
              folders={this.state.folders}
              onClickBack={() => routerProps.history.goBack()}
            />}
          }/>
          <Route exact path='/' render={() =>
            <Main notes={this.state.notes} />
          }/>
          <Route path='/folder/:folderId' render={(routerProps) =>
            <Main notes={this.state.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />
          }/>
          <Route path='/note/:noteId' render={(routerProps) =>
            <Main note={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} />
          } />
        </main>
      </div>
    );
  }
}

export default App;