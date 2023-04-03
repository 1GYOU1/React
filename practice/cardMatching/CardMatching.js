/*
이 코드는 React를 사용하여 만들어진 카드 매칭 게임입니다.

cards 배열에는 게임에서 사용할 카드들이 객체 형태로 저장되어 있습니다. 각 카드는 id, name, imgUrl의 속성을 가지고 있습니다.

Game 컴포넌트에서는 useState 훅을 사용하여 flippedCards와 matchedCards 상태를 관리합니다. 
flippedCards는 현재 뒤집혀진 카드들의 ID가 저장되어 있으며, matchedCards는 이미 매칭된 카드들의 ID가 저장되어 있습니다.

handleClick 함수는 카드 클릭 이벤트를 처리합니다. 
먼저, 이미 뒤집어진 카드는 무시하고, 뒤집은 카드의 ID를 flippedCards에 추가합니다. 
그 다음, 현재 뒤집어진 카드가 두 장인 경우, 두 카드가 매칭되는지 확인합니다. 
두 카드의 이름이 같으면 matchedCards에 매칭된 카드들의 ID를 추가하고, flippedCards를 초기화합니다. 
두 카드의 이름이 다른 경우에는 flippedCards를 초기화합니다.

마지막으로, Game 컴포넌트는 cards 배열을 map 함수를 사용하여 렌더링합니다. 
각 카드는 card 객체를 받아서 className에 flipped, matched 클래스를 추가하여 현재 카드의 상태를 표시합니다. 
카드를 클릭하면 handleClick 함수가 실행됩니다. 카드의 뒷면과 앞면에는 card-back과 card-front 클래스가 추가되어 있습니다. 
카드의 이미지는 imgUrl 속성을 통해 불러옵니다.
*/
import React, { useState } from 'react';
import './cardstyle.css';

const cards = [
  { id: 1, name: 'card-1', imgUrl: 'img/card-1.jpg' },
  { id: 2, name: 'card-1', imgUrl: 'img/card-1.jpg' },
  { id: 3, name: 'card-2', imgUrl: 'img/card-2.jpg' },
  { id: 4, name: 'card-2', imgUrl: 'img/card-2.jpg' },
  { id: 5, name: 'card-3', imgUrl: 'img/card-3.jpg' },
  { id: 6, name: 'card-3', imgUrl: 'img/card-3.jpg' },
  { id: 7, name: 'card-4', imgUrl: 'img/card-4.jpg' },
  { id: 8, name: 'card-4', imgUrl: 'img/card-4.jpg' },
  { id: 9, name: 'card-5', imgUrl: 'img/card-5.jpg' },
  { id: 10, name: 'card-5', imgUrl: 'img/card-5.jpg' },
  { id: 11, name: 'card-6', imgUrl: 'img/card-6.jpg' },
  { id: 12, name: 'card-6', imgUrl: 'img/card-6.jpg' },
];

const Game = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleClick = (id, name) => {
    // 이미 매칭된 카드는 무시
    if (matchedCards.includes(id)) return;
  
    // 이미 뒤집어진 카드는 무시
    if (flippedCards.includes(id)) return;
  
    // 뒤집은 카드 상태 업데이트
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
  
    let newMatchedCards = matchedCards;

    // 짝이 맞는 카드인 경우
    if (newFlippedCards.length === 2 && cards.find(card => card.id === newFlippedCards[0]).name === cards.find(card => card.id === newFlippedCards[1]).name) {
        // 상태 업데이트
        newMatchedCards = [...matchedCards, ...newFlippedCards];
        setMatchedCards(newMatchedCards);
        setFlippedCards([]);
    }
  
    // 모든 카드가 매칭된 경우
    if (newMatchedCards.length === cards.length) {
      alert('Congratulations! You have matched all the cards!');
    }
  
    // 짝이 맞지 않는 경우
    if (newFlippedCards.length === 2) {
      setTimeout(() => {
        // 상태 업데이트
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="game">
      {cards.map(card => (
        <div
          key={card.id}
          className={`card ${flippedCards.includes(card.id) ? 'flipped' : ''} ${matchedCards.includes(card.id) ? 'matched' : ''}`}
          onClick={() => handleClick(card.id, card.name)}
        >
          <div className="card-back"></div>
          <div className="card-front">
            <img src={card.imgUrl} alt={card.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;
