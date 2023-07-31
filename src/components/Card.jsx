import React from 'react'

const Card = (props) => {
  return (
    <div className='app'>
     <div className='sap'>
        <div>{props.name}</div>
        <img src={props.flag} alt="" className='w-96' />
        <div>Area:{props.area}</div>
        <div>Borders:{props.borders}</div>
        <div>Capital:{props.capital}</div>
        <div>Maps:{props.googleMaps}</div>
        <div>Population:{props.population}</div>
        <div>Region:{props.region}</div>
     </div>
    </div>
  )
}

export default Card;