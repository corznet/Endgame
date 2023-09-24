const asyncHandler = require('express-async-handler')

const Game = require('../models/gameModel')
const User = require('../models/userModel')


// get games
//@route GET /api/games
//acess private
const getGames = asyncHandler(async (req,res) => {

    const games = await Game.find({user: req.user.id})
    res.status(200).json(games)
})

// Set games
//@route POST /api/goals
//acess private
const setGame = asyncHandler(async (req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const game = await Game.create({
        text: req.body.text,
        user: req.user.id
    })


    console.log(req.body)
    res.status(200).json(game)
})

// update games
//@route PUT /api/goals
//acess private
const updateGame = asyncHandler(async (req,res) => {
    const game = await Game.findById(req.params.id)
    if(!game){
        res.status(400)
        throw new Error('Game not found')
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    // make sure logged user matches game user
    if(game.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }
    const updatedGame = await Game.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
    })

    res.status(200).json(updatedGame)
})

// Delete game
//@route DELETE /api/goals
//acess private
const deleteGame = asyncHandler(async (req,res) => {
    const game = await Game.findById(req.params.id)
    if(!game){
        res.status(400)
        throw new Error('Game not found')
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    // make sure logged user matches game user
    if(game.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }

    await game.deleteOne()


    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGames,setGame,updateGame,deleteGame,
}