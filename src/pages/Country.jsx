import React from 'react'
import { useParams } from 'react-router-dom'


const Country = () => {
 const [countries,setCountries] = React.useState([])
 const {country} = useParams()

 React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(([res]) => setCountries(res))
    .catch(err => console.log(err))
 }, [country])

 if(!countries.flags) return <h1>Loading</h1>
  return (
    <div className='npm'>
     <div className='capa'>
      <img src={countries.flags.svg} alt=""  className='img '/>
      <div>
        <img src={countries.flags.svg} alt="" className='tar '/>
        {countries.name.common}
        {countries.area}
        </div>
      <div>Capital: {countries.capital.map(item => <span key={item}>{item}</span>)}</div>
     </div>
    </div>
  )
}

export default Country