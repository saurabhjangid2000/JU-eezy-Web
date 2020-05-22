import React, { useState } from 'react';
import Scroll from './Scroll';

export default function GpaCalculator() {
  const [Aplus, setAplus] = useState(0);
  const [justA, setjustA] = useState(0);
  const [justB, setjustB] = useState(0);
  const [justC, setjustC] = useState(0);
  const [justD, setjustD] = useState(0);
  const [justE, setjustE] = useState(0);
  const [gpaResult, setgpaResult] = useState('Not Available');

  function gpacalc(event) {
    event.preventDefault();
    console.log(Aplus, justA, justB, justC, justD, justE);
    var total = (
      (Aplus * 10 + justA * 9 + justB * 8 + justC * 7 + justD * 6 + justE * 5) /
      (Aplus + justA + justB + justC + justD + justE)
    ).toFixed(2);
    console.log(total);
    setgpaResult('Your GPA is: ' +  total.toString());
  }

  return (
    <>
      <section id="first">
        <header>
          <h2>KNOW YOUR GPA</h2>
        </header>
        <div className="content">
          <h2>Enter Your Grades to check</h2>
          <form onSubmit={gpacalc}>
            <div className="row gtr-uniform">
              <div className="col-4 col-12-xsmall">
                <h3>A+</h3>
                <input
                  type="number"
                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setAplus(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>A</h3>
                <input
                  type="number"

                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setjustA(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>B</h3>
                <input
                  type="number"

                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setjustB(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>C</h3>
                <input
                  type="number"

                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setjustC(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>D</h3>
                <input
                  type="number"

                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setjustD(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <h3>E</h3>
                <input
                  type="number"

                  defaultValue="0"
                  placeholder="Enter the number of Grades"
                  onChange={e => setjustE(e.target.valueAsNumber)}
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <a onClick={gpacalc}>
                      <Scroll type="id" element="gpatotal">
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
      <section id="gpatotal">
        <header>
          <h2>Result</h2>
        </header>
        <div className="content">
          <h1>{gpaResult}</h1>
          <h5>DISCLAIMER: YOUR CALCULATED GPA HERE MAY HAVE AN ERROR OF +/-0.3.</h5>
        </div>
      </section>
    </>
  );
}
