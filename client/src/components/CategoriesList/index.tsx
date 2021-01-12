import React from 'react';
import { useQuery } from '@apollo/client';
import { SpinnerCircular } from 'spinners-react';

import { GET_CATEGORIES } from '../../queries';

interface CategoriesArgs {
  categoriesArray: string[]
}

const callCategories = ({ categoriesArray }: CategoriesArgs) => {
  if(categoriesArray.length > 0) {
    return categoriesArray.map((category) => {
      return <div key={category}>{category}</div>
    })
  }
}

const CategoriesList: React.FC = () => {

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <SpinnerCircular />
  }

  return (
    <div>
      <h4>Categories</h4>
      <div>
        {callCategories({ categoriesArray: data.categories })}
      </div>
    </div>
  );
}

export default CategoriesList;
