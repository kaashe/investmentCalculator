import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Investmenttable from "./components/Table/Investmenttable";

function App() {
  const [result, setResult] = useState();
  const calculateHandler = (userInput) => {
    const yearlyData = []; 

    if(userInput){
      let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    }
    setResult(yearlyData)
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler}/>
      {!result&& <p className='message'>No Results Found</p> }
      {result&&<Investmenttable result={result} initialInv={result["current-savings"]}/>}
    </div>
  );
}

export default App;
