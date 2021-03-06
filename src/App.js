import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import NotefulContext from './NotefulContext';
import FolderSidebar from './FolderSidebar/FolderSidebar';
import NoteList from './NoteList/NoteList';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteContent from './NoteContent/NoteContent';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NoteError from './NoteError/NoteError';
import SidebarError from './SidebarError/SidebarError';
import NoteContentError from './NoteContentError/NoteContentError';
import FormError from './FormError/FormError';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
    }
  }
  addFolder = data => {
    const newFolders = [...this.state.folders, data];
    this.setState({
      folders: newFolders
    });
  }
  addNote = data => {
    const newNotes = [...this.state.notes, data];
    this.setState({
      notes: newNotes
    });
  }
  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    );
    this.setState({
      notes: newNotes
    });
  }
  componentDidMount() {
    fetch(config.API_ENDPOINT + `/folders`)
      .then(response =>{
        if(!response.ok) {
          return response.json().then(error => {
            throw error
          });
        } return response.json()
      })
      .then(data => {
        this.setState({
          folders: data
        });
      })
      .catch(error =>{
        this.setState({
          folderError: error.message,
        })
      })
  
    fetch(config.API_ENDPOINT + `/notes`)
      .then(response =>{
        if(!response.ok) {
          return response.json().then(error => {
            throw error
          });
        } return response.json()
      })
      .then(data => {
        this.setState({
          notes: data
        });
      })
      .catch(error =>{
        this.setState({
          noteError: error.message,
        })
      });
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    }
    const folderError = this.state.folderError 
      ? <h2 className='Error'>An error occured: {this.state.folderError}</h2> 
      : '';
    const noteError = this.state.noteError 
      ? <h2 className='Error'>An error occured: {this.state.noteError}</h2> 
      : '';
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <NotefulContext.Provider value={contextValue}>
            <section className='Sidebar'>
            {folderError}
              <SidebarError>
                <Route exact path='/' component={FolderSidebar} />
                <Route path='/folder/:folder_id' component={FolderSidebar} />
                <Route path='/note/:note_id' component={NoteSidebar} />
                <Route path='/add-folder' component={FolderSidebar} />
                <Route path='/add-note' component={FolderSidebar} />
              </SidebarError>
            </section>
            <section className='MainContent'>
              {noteError}
              <NoteError>
                <Route exact path='/' component={NoteList} />
                <Route path='/folder/:folder_id' component={NoteList} />
                <Route path='/note/:note_id' component={NoteList} />
              </NoteError>
              <NoteContentError>
                <Route path='/note/:note_id' component={NoteContent} />
              </NoteContentError>
              <FormError>
                <Route path='/add-folder' component={AddFolder} />
                <Route path='/add-note' component={AddNote} />
              </FormError>
            </section>
          </NotefulContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;