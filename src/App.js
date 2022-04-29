import "./App.css";
import React, { useState } from "react";
import { Button, Dropdown, Input } from "@innovaccer/design-system";
function App() {
  const [weight, setWeight] = useState(0);
  const [weightS, setWeightS] = useState(0);
  const [height, setHeight] = useState(0);
  const [heightS, setHeightS] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let bmiCalculate = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      if (weightS === 1 && heightS === 1) {
        let bmi = (weight / (height * height)) * 703;
        setBmi(bmi.toFixed(1));
      } else if (weightS === 1 && heightS === 2) {
        let bmi = (weight / (height * height)) * 4536;
        setBmi(bmi.toFixed(1));
      } else if (weightS === 2 && heightS === 1) {
        let bmi = (weight / (height * height)) * 1550;
        setBmi(bmi.toFixed(1));
      } else if (weightS === 2 && heightS === 2) {
        let bmi = (weight / (height * height)) * 10000;
        setBmi(bmi.toFixed(1));
      }
      // if (bmi < 25) {
      //   setMessage("You are underweight");
      // } else if (bmi >= 25 && bmi < 30) {
      //   setMessage("You are a healthy weight");
      // } else {
      //   setMessage("You are overweight");
      // }
    }
    
  };

  let reload = () => {
    window.location.reload();
  };

  const onClearWeight = React.useCallback(() => {
    setWeight("");
  }, []);
  const onClearHeight = React.useCallback(() => {
    setHeight("");
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={bmiCalculate}>
          <div>
            <label>
              Weight
              <Input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onClear={onClearWeight}
              />
              <Dropdown
                className="w-50 mt-3"
                options={[
                  { label: "Pounds(lb)", value: 1 },
                  { label: "Kilograms(kg)", value: 2 },
                ]}
                placeholder="lb/kg"
                onChange={(value) => setWeightS(value)}
              />
            </label>
          </div>
          <div>
            <label style={{ fontSize: "20" }}>
              Height
              <Input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                onClear={onClearHeight}
              />
              <Dropdown
                className="w-50 mt-3"
                options={[
                  { label: "Inches(in)", value: 1 },
                  { label: "Centimetre(cm)", value: 2 },
                ]}
                placeholder="in/cm"
                onChange={(value) => setHeightS(value)}
              />
            </label>
          </div>

          <div className="d-flex">
            <Button aria-label="Copy" className="mr-4" type="submit">
              Submit
            </Button>
            <Button
              aria-label="Paste"
              className="mr-4"
              onClick={reload}
              type="submit"
            >
              Reload
            </Button>
          </div>
        </form>

        <div className="center">
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
