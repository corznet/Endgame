const asyncHandler = require('express-async-handler')


// get games
//@route GET /api/games
//acess private
const getGames = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get goals'})
})

// Set games
//@route POST /api/goals
//acess private
const setGame = asyncHandler(async (req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }


    console.log(req.body)
    res.status(200).json({message: 'Create game'})
})

// get games
//@route GET /api/goals
//acess private
const updateGame = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update games ${req.params.id}`})
})

// Delete game
//@route DELETE /api/goals
//acess private
const deleteGame = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete games ${req.params.id}`})
})

module.exports = {
    getGames,setGame,updateGame,deleteGame,
}