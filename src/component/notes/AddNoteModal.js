import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/noteActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddNoteModal = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = () => {
    if (title === '' || content === '') {
      M.toast({ html: 'Please add title and content' });
    }

    const newNote = {
      title,
      content,
      pinned: false,
      date: new Date(),
      label: null
    };

    addNote(newNote);
    M.toast({ html: 'Note added' });

    // clear fields
    setTitle('');
    setContent('');
  };

  return (
    <div id='add-note-modal' className='modal'>
      <div className='modal-content'>
        <h6>Add Note</h6>

        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              name='title'
              value={title}
              placeholder='Title'
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor='title'></label>
          </div>
          <div className='input-field col s12'>
            <textarea
              className='materialize-textarea'
              name='content'
              value={content}
              placeholder='Content'
              onChange={e => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>

        <a
          href='#!'
          className='modal-close waves-effect waves-green btn'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddNoteModal.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default connect(null, { addNote })(AddNoteModal);
