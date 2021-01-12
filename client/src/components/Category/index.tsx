import React from 'react';

interface Props {
  category: string,
  handleClick: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string
}

const Category: React.FC<Props> = ({ category, handleClick, isOpen, categoryChosen }) => {
  return (
    <div>
      <div onClick={() => handleClick(category)}>
        <h4>{category}</h4>
      </div>
    </div>
  );
}

export default Category;
