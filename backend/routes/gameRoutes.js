const express = require('express')
const router = express.Router();
const {getGames,setGame,updateGame,deleteGame} = require('../controllers/gameController')


const {protect} = require('../middleware/authMiddleware')

router.get('/',protect,getGames)

router.post('/',protect,setGame)

router.put('/:id',protect,updateGame)

router.delete('/:id',protect,deleteGame)


module.exports = router