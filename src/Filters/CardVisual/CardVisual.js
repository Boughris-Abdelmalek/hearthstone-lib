import React from 'react'
import Header from '../../header/Header';
import { useLocation } from 'react-router-dom';
import styles from '../../Filters/Faction/AllianceHorde.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Return from '../../header/Return';
import Loader from '../../home/Loader/Loader';

const CardVisual = () => {
    const location = useLocation();
    const data = location.state.input;
    const [card, setCard] = useState([]);
    const [isLoading, setLoader] = useState(true);

    useEffect(() => {
      const fetchData = async() => {
        const options = {
          method: 'GET',
          url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${data}`,
          headers: {
            'X-RapidAPI-Key': '40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236',
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
          }
        };
        
        const response = await axios.request(options);
        setCard(response.data);
        setLoader(false);
        console.log(response.data)
      }
      fetchData();
    }, [data])

  return (
    <div className={styles.container}>
      <Header />
      <Return path="" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {card.map((e) => {
            if (e.hasOwnProperty("imgGold") || e.hasOwnProperty("img")) {
              return (
                <li key={e.cardId}>
                  <img src={e.img} alt="card" />
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  )
}

export default CardVisual;