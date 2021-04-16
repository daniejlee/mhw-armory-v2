import './App.css';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    let armorType = 'chest';
    fetch(`https://mhw-db.com/armor?q={"type":"${armorType}"}`)
      .then(res => {
        console.log(res)
       return res.json()
      })
      .then(data => {
        console.log(data)
      })


    fetch('https://mhw-db.com/armor')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
