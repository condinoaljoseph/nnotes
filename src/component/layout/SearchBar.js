import React from 'react';

const SearchBar = () => {
  return (
    <nav className='white black-text'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Find notes'
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
