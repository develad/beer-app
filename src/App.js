import React, { useState, useEffect } from 'react';
import './App.css';
import Dog from './components/Dog'

const DOG_NUM = 20

function App() {

  const [dogarr, setDogarr] = useState([])

  const getDogs = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random/${DOG_NUM}`)
      const data = await res.json()
      console.log(data.message)
      setDogarr(data.message)
      console.log(dogarr)
    } catch (error) {
      return (<h1>no</h1>)
    }
  }
  useEffect(() => {
    getDogs()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <div className="page-header">
        <h1 onClick={getDogs} >Click me for new dogs!
        <span role="img" aria-label="dog">🐶</span>
        </h1>
      </div>
      {dogarr.length > 0 ? <Dog dogpic={dogarr} /> : <h1>No connction! <span role="img" aria-label="ant">📡</span></h1>}
    </div >
  );
}

export default App;
