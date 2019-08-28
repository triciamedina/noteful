import React, {Component} from 'react';
import './AddFolder.css';
import ValidationError from '../ValidationError/ValidationError';
import NotefulContext from '../NotefulContext';

class AddFolder extends Component {
    static contextType = NotefulContext;
    constructor(props) {
        super(props);
        this.state = {
            folderName: {
                value: '',
                touched: false,
            },
        };
    }
    updateFolderName(name) {
        this.setState({
            folderName: {
                value: name,
                touched: true,
            }
        });
    }
    validateFolderName() {
        const folderName = this.state.folderName.value.trim();
        if (folderName.length === 0) {
            return 'Folder name is required'
        };
    }
    addFolderRequest(event) {
        event.preventDefault();
        const folderName = this.state.folderName.value;
        const data = {'name': folderName}
        fetch('http://localhost:9090/folders', {
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
            this.context.addFolder(data);
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({
                error: error.message,
            });
        });
    }
    render() {
        const error = this.state.error
            ? <div className='AddFolder__error'>An error occured: {this.state.error}</div>
            : '';
        return (
            <form className='AddFolder__form' onSubmit={(event) => this.addFolderRequest(event)}>
                <h2 className='form__title'>Add a New Folder</h2>
                <div className='form__group'>
                    <label htmlFor='name'> Folder Name</label>
                    <input type='text' className='name-input' 
                        name='name' id='name' 
                        defaultValue='My New Folder'
                        aria-label='Folder name'
                        aria-required='true'
                        onChange={e => this.updateFolderName(e.target.value)}
                    />
                    {this.state.folderName.touched && 
                        (<ValidationError message={this.validateFolderName()} />)
                    }
                </div>
                <div className='AddFolder__buttons'>
                    <button type='button' onClick={() => this.props.history.push('/')}>
                        Cancel
                    </button>
                    <button 
                        type='submit'
                        className='AddFolder__submit'
                        disabled={
                            this.validateFolderName()
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

export default AddFolder;