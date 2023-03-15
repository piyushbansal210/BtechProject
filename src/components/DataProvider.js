

import React, {createContext, useEffect, useState} from 'react';

export const DataContext = createContext({});

const DataProvider = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_36373bbcb5acc09c1ef81763b504d0f486ec&q=pegasus&language=en')
      .then(response => response.json())
      .then(info => {
        setData(info);
      });
  }, []);

  return <DataContext.Provider value={{ data: data }}>{props.children}</DataContext.Provider>
};

export default DataProvider;
