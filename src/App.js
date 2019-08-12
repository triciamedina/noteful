import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import MainSidebar from './MainSidebar/MainSidebar';
import MainPage from './MainPage/MainPage'
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NotePage from './NotePage/NotePage'
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
          <aside>
            <Route exact path='/' render={() =>
              <MainSidebar folders={this.state.folders}/>
            } />
            <Route path='/folder/:folderId' render={() => 
              <MainSidebar folders={this.state.folders}/>
            } />
            <Route path='/note/:noteId' render={(routerProps) =>
              <NoteSidebar 
                note={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} 
                folders={this.state.folders}
                onClickBack={() => routerProps.history.goBack()}
              />
            }/>
          </aside>
          <section>
            <Route exact path='/' render={() =>
              <MainPage notes={this.state.notes} />
            } />
            <Route path='/folder/:folderId' render={(routerProps) =>
              <MainPage notes={this.state.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />
            } />
            <Route path='/note/:noteId' render={(routerProps) =>
              <NotePage note={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} />
            } />
          </section>
        </main>
      </div>
    );
  }
}

export default App;