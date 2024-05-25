import React, { useEffect, useState } from 'react'
import styles from './FlagCards.module.css'
import Card from './Card'

export default function FlagCards() {
  let [countries, setCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) =>
      setCountries(data)).catch((err) => console.log(err))
  },[])

  console.log(countries)
  return (
<div className={styles.container}>
 {countries.map((country) => {
  return <Card image={country.flags.png} countryName ={country.name.common} />
 })}
</div>  )
}
