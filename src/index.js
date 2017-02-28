import express from 'express';
import bodyParser from 'body-parser';
import MovieRoutes from './routes/MovieRoutes';

const app = express();

// Connect to mongoose db
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());
app.use(MovieRoutes);

// Error handler middleware
app.use(function (err, request, response, next) {
  return response.status(500).send(err);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
