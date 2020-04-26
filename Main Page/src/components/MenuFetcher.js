import React from 'react';
import config from '../../config';

import { useState, useEffect } from 'react';

export default function TodayMenu() {
  const [incomingrefreshmentdata, setrefreshmentdata] = useState(0);
  const [incominglunchdata, setlunchdata] = useState(0);
  const [incomingdinnerdata, setdinnerdata] = useState(0);
  const [incomingbreakfastdata, setbreakfastdata] = useState(0);

  useEffect(() => {
    // get data from api
    fetch(config.menuApiAddress)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData);
        // set data for the number of dishes
        setbreakfastdata(
          resultData.breakfast.split(',').map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        );
        setlunchdata(
          resultData.lunch.split(',').map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        );
        setrefreshmentdata(
          resultData.refreshment.split(',').map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        );
        setdinnerdata(
          resultData.dinner.split(',').map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        );
      });
  }, []);

  return (
    <div className="content">
      <h2>Breakfast</h2>
      <ul>
        <strong>{incomingbreakfastdata}</strong>
      </ul>
      <h2>Lunch</h2>
      <ul>
        <strong>{incominglunchdata}</strong>
      </ul>
      <h2>Refreshment</h2>
      <ul>
        <strong>{incomingrefreshmentdata}</strong>
      </ul>
      <h2>Dinner</h2>
      <ul>
        <strong>{incomingdinnerdata}</strong>
      </ul>
    </div>
  );
}
