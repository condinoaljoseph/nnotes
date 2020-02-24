import React from 'react';
import Labels from '../labels/Labels';

const Sidebar = () => {
  return (
    <div className='mysidebar'>
      <ul className='linkItems'>
        <li>
          <a href='#add-note-modal' className='modal-trigger'>
            Add Notes
          </a>
        </li>
      </ul>
      <Labels />
    </div>
  );
};

export default Sidebar;
