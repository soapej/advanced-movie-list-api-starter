import express from 'express';
const router = express.Router();
import moviesController from '../controllers/MoviesController';

// Declare GET /contacts route
router.get('/movies', moviesController.list);

router.get('/movies/:_id', moviesController.show);

router.delete('/movies/:_id', moviesController.remove);

router.post('/movies', moviesController.create);

router.put('/movies/:_id', moviesController.update);

module.exports = router;
