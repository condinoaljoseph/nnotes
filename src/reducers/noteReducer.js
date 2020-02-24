import {
  SET_LOADING,
  GET_NOTES,
  NOTES_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types';

const initialState = {
  notes: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        loading: false
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case NOTES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
