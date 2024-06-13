import React from 'react';

const GameCategory = ({ onSelectCategory }) => (
  <div className="game-category">
    <h1>Choose Category</h1>
    <div className="line"></div>
    <div className="category-options">
      <button onClick={() => onSelectCategory(9)}>General Knowledge</button>
      <button onClick={() => onSelectCategory(31)}>Anime</button>
      <button onClick={() => onSelectCategory(19)}>Science Mathematics</button>
      <button onClick={() => onSelectCategory(18)}>Computers</button>
    </div>
  </div>
);

export default GameCategory;
