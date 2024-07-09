import Card from '/src/components/Card';

function Board({ cards, setCards, setOnHold, onFlip }) {
  return (
    <div className="board">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} index={idx} onFlip={onFlip} />
      ))}
    </div>
  );
}

export default Board;
