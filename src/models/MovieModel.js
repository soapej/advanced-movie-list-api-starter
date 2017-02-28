import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },

  poster: {
    required: true,
    type: String
  },
});

module.exports = mongoose.model('Movie', movieSchema);
