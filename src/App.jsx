import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [isWinner, setIsWinner] = useState(false);
  const [start, setStart] = useState(false);

  const gameOverClass = isWinner ? ' game-over' : '';

  return (
    <>
      {/* Game title  */}
      <div className="title">
        <img
          src="/images/game_title.png
        "
          alt="Mario Memory Game"
        />
      </div>
      <div className="container">
        {/* You win message */}
        <img
          src="/images/you-win.png"
          className={`you-win ${gameOverClass}`}
          alt="You Win!"
        />
        {!start ? (
          // Start game initial button
          <div className="start-btn" onClick={() => setStart(true)}>
            <button>START</button>
          </div>
        ) : (
          // Board game layout
          <div className={gameOverClass}>
            {/* Restart button */}
            <div className={`restart ${gameOverClass}`}>
              <div>
                Restart
                <span>
                  <img src="/images/icons/hand-pointing-right.svg" />
                </span>
              </div>
              <button>
                <img src="/images/icons/restart-arrow.svg" />
              </button>
            </div>
            {/* Board game */}
            <Board isWinner={setIsWinner} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
