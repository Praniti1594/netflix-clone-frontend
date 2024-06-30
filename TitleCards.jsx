import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {
/*from here: this setup allows user to scroll horizontally through an element (like a list of cards) using the mouse wheel, which normally scrolls vertically.*/ 
  const cardsRef = useRef();

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handleWheel);
},[])
/*till here: this setup allows user to scroll horizontally through an element (like a list of cards) using the mouse wheel, which normally scrolls vertically.*/

  return (
    <div className='title-cards'>
       <h2>{title?title : "Popular on Netflix"}</h2>
       <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
       </div>
    </div>
  )
}

export default TitleCards