import { useDispatch } from "react-redux"
import {deleteGame} from '../features/games/gameSlice'


function GameItem({game}) {
  const dispatch = useDispatch()
  return (
    <div className = "game">
        <div>
            {new Date(game.createdAt).toLocaleString('en-US')}
        </div>
        <h2>
        {game.text}
        </h2>
        
        <button onClick={() => dispatch(deleteGame(game._id))}className = 'close'>
        </button>
    </div>
  )
}

export default GameItem