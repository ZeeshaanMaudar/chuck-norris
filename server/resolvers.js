const axios = require('axios');

exports.resolvers = {
  Query: {
    categories: async () => {
      try {
        const categories = await axios.get('https://api.chucknorris.io/jokes/categories');
        return categories.data;
      } catch (error) {
        throw error
      }
    },

    getRandomJoke: async (_, { category }) => {
      
      if (!category) {
        return null;
      }

      try {

        const randomJoke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        return randomJoke.data;

      } catch (error) {
        throw error;
      }
    }
  }
}
