import React from 'react'

function timeConvert(time="1741257517515") {
    const date = new Date(1741257517515);


const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const year = String(date.getFullYear()).slice(-2); 

const formattedDate = `${month}/${day}/${year}`;
  return formattedDate 
}

export default timeConvert

export const time = (time) =>{
 // let time = new Date(time)
  //return timeDate

}