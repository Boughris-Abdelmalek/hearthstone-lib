import React from 'react'

const FactionsList = (props) => {
    const cards = props.cards;

  return (
    <ul>
      {cards.map(e => {
        if (e.hasOwnProperty('imgGold')){
          if(e['cardSet'] !== 'Battlegrounds'){
        return <li key={e.cardId} onClick={() => console.log(e.name)}>
          <img src={e.imgGold} alt='card'/>
      </li>
      }
    } 
  })
    }
    </ul>
  )
}

export default FactionsList;