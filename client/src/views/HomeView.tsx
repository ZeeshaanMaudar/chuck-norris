import React from 'react';
import CategoriesList from '../components/CategoriesList';
import Layout from '../components/layouts/Layout';

const HomeView: React.FC = () => {
  return (
    <Layout>
      <CategoriesList />
    </Layout>
  );
}

export default HomeView;
