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
  }
}
