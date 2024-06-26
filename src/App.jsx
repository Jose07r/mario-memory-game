import { useEffect, useRef, useState } from 'react';
import shuffleCards from './utils/shuffleCards';
import Board from './components/Board';
import TimeFormatter from './components/TimeFormatter';
import { startTimer, stopTimer } from './utils/Timer';
import Scores from './components/Scores';
import Loading from './components/Loading';

function App() {
  const [status, setStatus] = useState('start');
  const [cards, setCards] = useState([]);
  const [prevCard, setPrevCard] = useState(-1);
  const [onHold, setOnHold] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeScores, setTimeScores] = useState([]);

  if (timeElapsed >= 1800) {
    stopTimer();
  }

  const showCardsId = useRef(null);

  // Fetch and display cards
  useEffect(() => {
    async function fetchCards() {
      try {
        const res = await fetch('/data/cards.json');
        if (!res.ok) setStatus('error');
        const data = await res.json();

        setCards(shuffleCards(data));
        setStatus('active');
        showCardsId.current = setTimeout(() => {
          setCards((curCards) =>
            curCards.map((c) => ({ ...c, flipped: false }))
          );
          startTimer(setTimeElapsed);
        }, 4500);
      } catch (e) {
        console.error(e.message);
      }
    }

    if (status === 'loading') fetchCards();
  }, [status, cards, timeElapsed]);

  function handleFlip(index) {
    if (!onHold) {
      cards[index].flipped = true;
      if (prevCard === -1) {
        setCards([...cards]);
        setPrevCard(index);
      } else {
        setOnHold(true);
        compareCards(index);
      }
    }
    return;
  }

  function compareCards(currCard) {
    if (cards[currCard].id === cards[prevCard].id) {
      cards[currCard].matched = true;
      cards[prevCard].matched = true;
      setCards([...cards]);
      if (cards.every((card) => card.matched === true)) setStatus('finished');
      setPrevCard(-1);
      setOnHold(false);
    } else {
      setCards([...cards]);
      setTimeout(() => {
        cards[currCard].flipped = false;
        cards[prevCard].flipped = false;
        setCards([...cards]);
        setPrevCard(-1);
        setOnHold(false);
      }, 1000);
    }
  }

  function handleRestart() {
    setStatus('start');
    setCards([]);
    setPrevCard(-1);
    setOnHold(false);
    stopTimer();
    clearTimeout(showCardsId.current);
    if (status === 'finished') setTimeScores([...timeScores, timeElapsed]);
    setTimeElapsed(0);
  }

  let gameOverClass = '';

  if (status === 'finished') {
    gameOverClass = ' game-over';
    stopTimer();
  }

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
        {status === 'start' && (
          <>
            {/* Start game initial button */}
            <div className="start-btn" onClick={() => setStatus('loading')}>
              <button>START</button>
            </div>
            {timeScores.length > 0 && (
              <Scores timeScores={timeScores} setTimeScores={setTimeScores} />
            )}
          </>
        )}
        {status === 'loading' && <Loading />}
        {status !== 'start' && status !== 'loading' && (
          <>
            {/* You win message */}
            <img
              src="/images/you-win.png"
              className={`you-win ${gameOverClass}`}
              alt="You Win!"
            />
            {/* Board game layout */}
            <div className={gameOverClass}>
              <div className="board-controls">
                <TimeFormatter time={timeElapsed} customClass="timer" />
                {/* Restart button */}
                <div className={`restart ${gameOverClass}`}>
                  <div>
                    Restart
                    <span>
                      <img src="/images/icons/hand-pointing-right.svg" />
                    </span>
                  </div>
                  <button onClick={handleRestart}>
                    <img src="/images/icons/restart-arrow.svg" />
                  </button>
                </div>
              </div>
              {/* Board game */}
              <Board
                cards={cards}
                setCards={setCards}
                setOnHold={setOnHold}
                onFlip={handleFlip}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
