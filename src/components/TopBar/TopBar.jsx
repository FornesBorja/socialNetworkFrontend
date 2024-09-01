import React, { useState } from 'react';

const TopBar = ({ activeTab, onTabChange }) => {
  return (
    <div className="top-bar">
     <button
        className={activeTab === 'allPost' ? 'active' : ''}
        onClick={() => onTabChange('allPost')}
      >
        All posts
      </button>
      <button
        className={activeTab === 'following' ? 'active' : ''}
        onClick={() => onTabChange('following')}
      >
        Following
      </button>    </div>
  );
};

export default TopBar;
