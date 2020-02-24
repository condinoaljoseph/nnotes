import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/noteActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditNoteModal = ({ updateNote, current }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setContent(current.content);
    }
  }, [current]);

  const onSubmit = () => {
    if (title === '' || content === '') {
      M.toast({ html: 'Please add title and content' });
    }

    const updatedNote = {
      id: current.id,
      title,
      content,
      pinned: false,
      date: new Date(),
      label: null
    };

    updateNote(updatedNote);

    M.toast({ html: 'Note updated' });

    setTitle('');
    setContent('');
  };

  return (
    <div id='edit-note-modal' className='modal'>
      <div className='modal-content'>
        <h6>Edit Note</h6>

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
          Update
        </a>
      </div>
    </div>
  );
};

EditNoteModal.propTypes = {
  current: PropTypes.object,
  updateNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current
});

export default connect(mapStateToProps, { updateNote })(EditNoteModal);
