import React from 'react';
import Temp from './Temp';

export default function Card({max, min, name, img, onClose}) {
  return (
    <div>
      <span>{name}</span>
      <button onClose={onClose}>X</button>
      <div>
        <Temp label= "Min" value= {min}/>
        <Temp label= "Max" value= {max}/>
        {/* <Iconos arg= "Hola" /> */} 
        <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
        alt="Icono"
        />
      </div>
    </div>
  )
};