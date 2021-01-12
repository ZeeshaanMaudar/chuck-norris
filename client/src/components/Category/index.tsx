import React from 'react';

interface Props {
  category: string,
  handleClick: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string
}

interface callRandomJokeArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string
}

const callRandomJoke = ({ isOpen, category, categoryChosen }: callRandomJokeArgs) => {
  if (isOpen && category === categoryChosen) {
    return <div>Random Joke query</div>
  }
}

const Category: React.FC<Props> = ({ category, handleClick, isOpen, categoryChosen }) => {
  return (
    <div>
      <div onClick={() => handleClick(category)}>
        <h4>{category}</h4>
      </div>
      {callRandomJoke({ isOpen, category, categoryChosen })}
    </div>
  );
}

export default Category;
