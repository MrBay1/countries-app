import React from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'


const Countries = () => {
 const [countries,setCountries] = React.useState([])
 const { country } = useParams()

 React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${country}`)
    .then(res => res.json())
    .then(res => setCountries(res))
    .catch(err => console.log(err))
 }, [country])

  return (
    <div className='flex flex-wrap justify-center px-6 py-4'>
      {countries.map(country => (
        <Card
         key={country.name.common}
         name={country.name.common}
         flag={country.flags.svg}
         area={country.area}
         borders={country.borders}
         capital={country.capital}
         map={country.googleMaps}
         population={country.population}
         region={country.region}
       />
      ))}
    </div>
  )
}

export default Countries