import {
  GET_NOTES,
  SET_LOADING,
  NOTES_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// get notes from the server
export const getNotes = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/notes');
    const data = await res.json();
    dispatch({
      type: GET_NOTES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data
    });
  }
};

// add notes
export const addNote = note => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_NOTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data
    });
  }
};

// delete note from the server
export const deleteNote = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/notes/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_NOTE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data
    });
  }
};

// update note from the server
export const updateNote = note => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/notes/${note.id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_NOTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data
    });
  }
};

// set current note
export const setCurrent = note => {
  return {
    type: SET_CURRENT,
    payload: note
  };
};

// clear current note
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
