import React, { useEffect } from 'react';
import SearchBar from './component/layout/SearchBar';
import Sidebar from './component/layout/Sidebar';
import Notes from './component/notes/Notes';
import AddNoteModal from './component/notes/AddNoteModal';
import EditNoteModal from './component/notes/EditNoteModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className='App'>
        <SearchBar />
        <Sidebar />
        <Notes />
        <AddNoteModal />
        <EditNoteModal />
      </div>
    </Provider>
  );
};

export default App;
