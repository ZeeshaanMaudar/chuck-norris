import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../queries';

import Category from '../Category';

import {
  Wrapper,
  Title,
  Spinner
} from './styled';

interface CategoriesArgs {
  categoriesArray: string[],
  handleClick: (category: string, refetch: () => void) => void,
  isOpen: boolean,
  categoryChosen: string
}

const callCategories = ({ categoriesArray, handleClick, isOpen, categoryChosen }: CategoriesArgs) => {

  if(categoriesArray.length > 0) {
    return categoriesArray.map((category) => {
      return <Category key={category} {...{ category, handleClick, isOpen, categoryChosen  }} />
    })
  }

  return null;
}

const CategoriesList: React.FC = () => {

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const [isOpen, setIsOpen] = useState(false);
  const [categoryChosen, setCategoryChosen] = useState('');

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <Spinner />
  }

  const handleClick = (category: string, refetch: () => void) => {

    if (categoryChosen && categoryChosen !== category) {
      setIsOpen(false);
      setCategoryChosen(category);
    }
    
    refetch();
    setIsOpen(prevOpen => !prevOpen);
    setCategoryChosen(category);
  }

  return (
    <Wrapper>
      <Title>Categories</Title>
      <div>
        {callCategories({ categoriesArray: data.categories, handleClick, isOpen, categoryChosen })}
      </div>
    </Wrapper>
  );
}

export default CategoriesList;
