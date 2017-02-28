import MovieModel from '../models/MovieModel';
const moviesController = {};

moviesController.list = function (request, response, next) {
  MovieModel.find().exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(err => {
      return next(err);
    });
};

moviesController.show = function (request, response, next) {
  MovieModel.findById(request.params._id).exec()
  .then(movie => {
    return response.json(movie);
  })
  .catch(err => {
    return next(err);
  });
};

moviesController.create = function (request, response, next) {
  const movie = new MovieModel({
    title: request.body.title,
    poster: request.body.poster
  });
  movie.save()
    .then(newMovie => {
      return response.json(newMovie);
    })
    .catch(err => {
      return next(err);
    });
};

moviesController.update = function (request, response, next) {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      movie.title = request.body.title || contact.title;
      movie.poster = request.body.poster || contact.poster;

      return movie.save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

moviesController.remove = function (request, response, next) {
  MovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = moviesController;
