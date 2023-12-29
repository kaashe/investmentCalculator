import React, { useState } from 'react'
import styles from './Form.module.css';
const initialState={
  "current-savings":110,
  "yearly-contribution":1110,
  "expected-return":7,
  duration:1,
};
const Form = (props) => {
  const [formData, setFormData] = useState(initialState);
  console.log(formData,'formdata');
  const changeHandler=(e)=>{
    const {id, value} = e.target;
    setFormData((prevValues)=>({
      ...prevValues,
      [id]:value,
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("saved",formData);
    props.onCalculate(formData)
  }
  const resetHandler = () => {
    setFormData(initialState)
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={changeHandler} type="number" id="current-savings" value={formData["current-savings"]}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={changeHandler} type="number" id="yearly-contribution"  value={formData["yearly-contribution"]}/>
        </p>
      </div>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={changeHandler} type="number" id="expected-return" value={formData["expected-return"]}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={changeHandler} type="number" id="duration" value={formData.duration }/>
        </p>
      </div>
      <p className={styles.actions}>
        <button onClick={resetHandler} type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default Form