import cardBg from '@assets/images/card-bg.png';

function Card({ card, index, onFlip }) {
  const cardClass = card.flipped || card.matched ? ' flipped' : '';

  return (
    <div className={'card' + cardClass} onClick={() => onFlip(index)}>
      <div className="card-inner">
        <div className="back">
          <img src={cardBg} alt="Card back face" />
        </div>
        <div className="front">
          <img src={card.imageSrc()} alt={card.name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
