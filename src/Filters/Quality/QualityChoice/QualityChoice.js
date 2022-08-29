import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../header/Header';
import Return from '../../../header/Return';
import axios from 'axios';

const QualityChoice = () => {
    const [qualityChoice, setQualityChoice] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
    const fetchQuality = async() => {
        const options = {
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/%7Bquality%7D',
            headers: {
              'X-RapidAPI-Key': '40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236',
              'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
          };
          
          const quality = await axios.request(options);

          setQualityChoice(quality);
          setLoading(false);
    }
    fetchQuality();
    }, [])
    


  return (
    <div>
      <Header />
      <Return path='quality'/>
      <div>
        
      </div>
    </div>
  )
}

export default QualityChoice;