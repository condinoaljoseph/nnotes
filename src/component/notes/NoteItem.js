import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, setCurrent } from '../../actions/noteActions';

import PropTypes from 'prop-types';

const NoteItem = ({ note, deleteNote, setCurrent }) => {
  const { id, title, content } = note;

  const onDelete = () => {
    deleteNote(id);
  };

  return (
    <div className='card'>
      <div className='card-panel'>
        <h6>{title}</h6>
        <p>{content}</p>
        <a
          href='#edit-note-modal'
          onClick={() => setCurrent(note)}
          className='btn waves-effect-waves-green modal-trigger'
        >
          Edit
        </a>
        <a
          href='#!'
          onClick={onDelete}
          className='btn red waves-effect-waves-green modal-trigger'
        >
          Delete
        </a>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteNote, setCurrent })(NoteItem);
