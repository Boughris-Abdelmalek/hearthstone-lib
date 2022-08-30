import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Factions from './Filters/Faction/Factions';
import Horde from './Filters/Faction/Horde/Horde';
import Alliance from './Filters/Faction/Alliance/Alliance';
import Home from './home/Home';
import Types from './Filters/Type/Types';
import TypeChoice from './Filters/Type/TypeChoice/TypeChoice';
import CardVisual from './Filters/CardVisual/CardVisual';
import TypeSelected from './Filters/Type/TypeSelected/TypeSelected';
import Quality from './Filters/Quality/Quality';
import QualityChoice from './Filters/Quality/QualityChoice/QualityChoice';
import Race from './Filters/Race/Race';
import RaceChoice from './Filters/Race/RaceChoice/RaceChoice';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/factions' element={<Factions />} />
      <Route path='/alliance' element={<Alliance />} />
      <Route path='/horde' element={<Horde />} />
      <Route path='/types' element={<Types />} />
      <Route path='/typesChoice' element={<TypeChoice />} />
      <Route path='/typeSelected' element={<TypeSelected />} />
      <Route path='/cardVisual' element={<CardVisual />} />
      <Route path='/quality' element={<Quality />} />
      <Route path='/qualityChoice' element={<QualityChoice />} />
      <Route path='/race' element={<Race />} />
      <Route path='/raceChoice' element={<RaceChoice />} />
    </Routes>
  );
};

export default App;