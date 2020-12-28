const { MONGO_HOST, MONGO_DATABASE } = process.env;

export const dbConnection = {
  url: `mongodb+srv://${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
