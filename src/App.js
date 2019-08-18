import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage'
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage';
import NotefulContext from './NotefulContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
    }
  }
  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
    console.log(this.state.notes)
  }
  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response =>{
        if(!response.ok) {
          return response.json().then(error => {
            throw error
          })
        } return response.json()
      })
      .then(data => {
        this.setState({
          folders: data
        })
      })
      .catch(error =>{
        console.log(error)
      })
  
    fetch('http://localhost:9090/notes')
      .then(response =>{
        if(!response.ok) {
          return response.json().then(error => {
            throw error
          })
        } return response.json()
      })
      .then(data => {
        this.setState({
          notes: data
        })
      })
      .catch(error =>{
        console.log(error)
      })
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
    }
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
          <NotefulContext.Provider value={contextValue}>
            <Route exact path='/' component={MainPage} />
            <Route path='/folder/:folderId' render={(routerProps) => 
              <FolderPage folderId={routerProps.match.params.folderId}/>
            }/>
            <Route path='/note/:noteId' render={(routerProps) =>
              <NotePage
                noteId={routerProps.match.params.noteId} 
                onClickBack={() => routerProps.history.goBack()}
                onDelete={() => routerProps.history.push('/')}
              />}
            />
          </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;