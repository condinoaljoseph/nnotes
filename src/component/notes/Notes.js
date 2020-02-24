import React, { useEffect } from 'react';
import NoteItem from './NoteItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotes } from '../../actions/noteActions';

const Notes = ({ note: { loading, notes }, getNotes }) => {
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (loading || notes === null) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className='notes'>
      {!loading && notes.length === 0 ? (
        <p>No notes to show</p>
      ) : (
        notes.map(note => <NoteItem note={note} key={note.id} />)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  note: state.note
});

Notes.propTypes = {
  note: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getNotes })(Notes);
