import React from 'react'
import styles from './Card.module.css'

export default function Card ({image, countryName}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`flag of : ${countryName}`} />
      <h4> {countryName}</h4>
    </div>
  )
}
