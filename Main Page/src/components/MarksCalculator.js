import React, { useState } from 'react';
import Scroll from './Scroll';

export default function MarksCalculator() {
  const [firstInSem, setfirstInSem] = useState(0);
  const [secondInSem, setsecondInSem] = useState(0);
  const [finalSem, setfinalSem] = useState(0);
  const [assignment, setassignment] = useState(0);
  const [attendance, setattendance] = useState(0);
  const [MarksResult, setMarksResult] = useState('Not Available');
  const [MarksRecomendation, setMarksRecomendation] = useState('Not Available');

  function gpacalc(event) {
    event.preventDefault();
    var total = (
      (firstInSem * 30) / 100 +
      (secondInSem * 30) / 100 +
      (finalSem * 50) / 100 +
      assignment +
      attendance
    ).toFixed(2);
    setMarksResult(`Your Marks :-  ${total}`);
    console.log(total);
    if (total >= 35) {
      if (finalSem >= 35) {
        setMarksRecomendation(`
          'You are Safe and you crossed Danger Zone, Your extra marks is ${
            total - 35
          }.`);
      } else {
        setMarksRecomendation(`You Have a Backlog in this paper and have to give this paper again
        You are UnSafe and you have to gain ${
          35 - finalSem
        } more marks from Teacher (Current Time).
        Means Next time in Final Back Paper you have to score Only 35 Marks.`);
      }
    } else {
      if (finalSem + (35 - total) * 2 < 35) {
        setMarksRecomendation(`You are UnSafe and you have to gain 
        ${
          (35 - total) * 2
        } more marks from Teacher (Current Time).\nMeans Next time in Final Back Paper you have to score Only 35 Marks.`);
      } else {
        setMarksRecomendation(
          ` You are UnSafe and you have to gain ${
            (35 - total) * 2
          } more marks from Teacher (Current Time).\n Means Next time in Final Back Paper you have to score Only ${
            finalSem + (35 - total) * 2
          } Marks`
        );
      }
    }
  }

  return (
    <>
      <section id="first">
        <header>
          <h2>KNOW YOUR MARKS</h2>
        </header>
        <div className="content">
          <h2>Enter Your Marks to check</h2>
          <form onSubmit={gpacalc}>
            <div className="row gtr-uniform">
              <div className="col-4 col-12-xsmall">
                <h3>First InSem</h3>
                <input
                  type="number"
                  placeholder="Enter the number of Grades"
                  onChange={(e) => setfirstInSem(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>Second InSem</h3>
                <input
                  type="number"
                  placeholder="Enter the number of Grades"
                  onChange={(e) => setsecondInSem(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>End Term</h3>
                <input
                  type="number"
                  placeholder="Enter the number of Grades"
                  onChange={(e) => setfinalSem(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>Assignment</h3>
                <input
                  type="number"
                  placeholder="Enter the number of Grades"
                  onChange={(e) => setassignment(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>Attendence</h3>
                <input
                  type="number"
                  placeholder="Enter the number of Grades"
                  onChange={(e) => setattendance(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <a onClick={gpacalc}>
                      <Scroll type="id" element="markstotal">
                        <a className=" button primary">Calculate</a>
                      </Scroll>
                    </a>
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section id="markstotal">
        <header>
          <h2>Result</h2>
        </header>
        <div className="content">
          <h1>{MarksResult}</h1>
          <h3>{MarksRecomendation}</h3>
          <h5>
            DISCLAIMER: YOUR CALCULATED MARKS HERE MAY HAVE AN ERROR OF +/-0.3.
          </h5>
        </div>
      </section>
    </>
  );
}
