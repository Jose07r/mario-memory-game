import TimeFormatter from '/src/components/TimeFormatter';

function Scores({ timeScores, setTimeScores }) {
  const currentScore = timeScores.at(timeScores.length - 1);
  let sortedScores = timeScores.toSorted((a, b) => a - b);
  if (timeScores.length > 6) {
    sortedScores = sortedScores.slice(0, 6);
  }

  return (
    <div className="scores">
      <h2>Top scores</h2>
      <div className="scores-list">
        {sortedScores.map((score, index) => {
          return (
            <p
              key={index}
              className={`score-item${index === 0 ? ' top' : ''}${
                currentScore === score ? ' current' : ''
              }`}
            >
              {index + 1}.
              <TimeFormatter time={score} />
            </p>
          );
        })}
      </div>
      <button onClick={() => setTimeScores([])} className="clear-scores-btn">
        <span>
          <img
            src="/mario-memory-game/images/icons/trash-can.svg"
            alt="Trash can"
          />
        </span>
        <span>Clear</span>
      </button>
    </div>
  );
}

export default Scores;
