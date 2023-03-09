const { Router } = require('express');
const { getMovie, saveMovie, deleteMovie, editMovie } = require('./MovieController')

const router = Router();

router.get('/', getMovie);
router.post('/saveMovie', saveMovie);
router.post('/deleteMovie', deleteMovie);
router.put('/editMovie', editMovie)



module.exports = router;