import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../queries';

import Category from '../Category';

import colorsArray from '../../utils/colorsArray';

import {
  Wrapper,
  Title,
  Spinner
} from './styled';

interface CategoriesArgs {
  categoriesArray: string[],
  openAccordion: (category: string, refetch: () => void) => void,
  isOpen: boolean,
  categoryChosen: string,
  refreshRandomJoke: (event: any, refetch: () => void)
}

const callCategories = ({ categoriesArray, openAccordion, isOpen, categoryChosen, refreshRandomJoke }: CategoriesArgs) => {

  if(categoriesArray.length > 0) {
    return categoriesArray.map((category, index) => {

      let color = colorsArray[index];

      return <Category key={category} {...{ category, openAccordion, isOpen, categoryChosen, color, refreshRandomJoke }} />;
      
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

  const openAccordion = (category: string, refetch: () => void) => {

    if (categoryChosen && categoryChosen !== category) {
      setIsOpen(false);
      setCategoryChosen(category);
    }
    
    refetch();
    setIsOpen(prevOpen => !prevOpen);
    setCategoryChosen(category);

  }

  const refreshRandomJoke = (event: any, refetch: () => void) => {

    event.stopPropagation();

    refetch();

  }

  return (
    <Wrapper>
      <Title>Categories</Title>
      <div>
        {callCategories({ categoriesArray: data.categories, openAccordion, isOpen, categoryChosen, refreshRandomJoke })}
      </div>
    </Wrapper>
  );
}

export default CategoriesList;
