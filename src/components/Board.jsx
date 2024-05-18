import { useEffect, useState } from 'react';
import { shuffle, initialCards } from '../utils/cards.js';
import Card from './Card.jsx';

function Board({ isWinner }) {
  const [cards, setCards] = useState([]);
  const [prevCard, setPrevCard] = useState(-1);
  const [onHold, setOnHold] = useState(false);

  useEffect(() => {
    setCards(shuffle(initialCards));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCards((curCards) => curCards.map((c) => ({ ...c, flipped: true })));
    }, 500);
    setTimeout(() => {
      setCards((curCards) => curCards.map((c) => ({ ...c, flipped: false })));
    }, 3000);
  }, []);

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
      if (cards.every((card) => card.matched === true)) isWinner(true);
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

  return (
    <div className="board">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} index={idx} onFlip={handleFlip} />
      ))}
    </div>
  );
}

export default Board;
