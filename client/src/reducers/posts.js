export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);

    case "FETCH_POST":
      return action.payload;

    case "COMMENT":
      return posts.map((post) => {
        if (post._id === action.payload._id) return action.payload;
        return post;
      });

    default:
      return posts;
  }
};
