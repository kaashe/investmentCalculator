import React from 'react'
import styles from './Investmenttable.module.css';
const Investmenttable = (props) => {
  return (
    <table className={styles.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
    {props?.result?.map((item,id)=>(
        <tr key={id}>
        <td>{item.year}</td>
        <td>{item.savingsEndOfYear}</td>
        <td>{item.yearlyInterest}</td>
        <td>{item.savingsEndOfYear-props.initialInv-item.yearlyContribution*item.year}</td>
        <td>{props.initialInv+item.yearlyContribution*item.year }</td>
      </tr>
    ))}
    </tbody>
  </table>
  )
}

export default Investmenttable