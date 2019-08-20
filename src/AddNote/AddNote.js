import React, {Component} from 'react';
import './AddNote.css';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';

class AddNote extends Component {
    static contextType = NotefulContext;
    constructor(props) {
        super(props);
        this.state = {
            noteName: {
                value: '',
                touched: false,
            },
            noteContent: {
                value: '',
                touched: false,
            },
            folderId: {
                value: '',
                touched: false,
            },
        };
    }
    updateNoteName(name) {
        this.setState({
            noteName: {
                value: name,
                touched: true,
            }
        });
    }
    updateNoteContent(input) {
        this.setState({
            noteContent: {
                value: input,
                touched: true,
            }
        });
    }
    updateFolderId(input) {
        this.setState({
            folderId: {
                value: input,
                touched: true,
            }
        })
    }
    validateNoteName() {
        const noteName = this.state.noteName.value.trim();
        if (noteName.length === 0) {
            return 'Note name is required'
        };
    }
    validateNoteContent() {
        const noteContent = this.state.noteContent.value.trim();
        if (noteContent.length === 0) {
            return 'Note content is required'
        };
    }
    validateFolderId() {
        const folderId = this.state.folderId.value.trim();
        if (folderId.length === 0) {
            return 'Folder is required'
        };
    }
    addNoteRequest(event) {
        event.preventDefault();
        const data = {
            'name': this.state.noteName.value,
            'modified': new Date(),
            'folderId': this.state.folderId.value,
            'content': this.state.noteContent.value,
        }
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                });
            }
            return response.json();
        })
        .then(data => {
            this.context.addNote(data);
            this.props.history.goBack();
        })
        .catch(error => {
            this.setState({
                error: error.message,
            });
        });
    }
    render() {
        const options = this.context.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>);
        const error = this.state.error
            ? <div className='AddNote__error'>An error occured: {this.state.error}</div>
            : '';
        return (
            <form className='AddNote__form' onSubmit={e => this.addNoteRequest(e)}>
                <h2 className='form__title'>Add a New Note</h2>
                <div className='form__group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='name-input' 
                        name='name' id='name' 
                        defaultValue='My New Note'
                        onChange={e => this.updateNoteName(e.target.value)}
                        />
                    {this.state.noteName.touched 
                    && (<ValidationError message={this.validateNoteName()} />) }
                </div>
                <div className='form__group'>
                    <label htmlFor='content'>Note</label>
                    <textarea className='content-input' 
                        name='content' id='content' 
                        defaultValue='My New Note'
                        onChange={e => this.updateNoteContent(e.target.value)}
                    />
                    {this.state.noteContent.touched 
                    && (<ValidationError message={this.validateNoteContent()} />) }
                </div>
                <div className='form__group'>
                    <label htmlFor='folder'>Folder</label>
                    <select 
                        className='folder-input' 
                        id='folder' 
                        name='folder'
                        onChange={e => this.updateFolderId(e.target.value)}
                    >
                        <option key={0} value=''>Select</option>
                        {options}
                    </select>
                    {this.state.folderId.touched 
                    && (<ValidationError message={this.validateFolderId()} />) }
                </div>
                <div className='AddNote__buttons'>
                    <button type='button' onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
                    <button 
                        type='submit'
                        disabled={
                            this.validateNoteName() || this.validateFolderId() || this.validateNoteContent()
                        }
                    >
                        Add
                    </button>
                    {error}
                </div>
            </form>
        );
    }
}

export default AddNote;