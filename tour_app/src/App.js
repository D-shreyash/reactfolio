import Tours from './components/Tours';
import info from './info';
import './App.css';
import React,{ useState } from 'react';

function App() {

  const [tours,setTours] = useState(info);

  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id );
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='no_tour'>
        <h2>
          NO tours Left
        </h2>
        <button className='refresh_btn' onClick={() => setTours(info)}>
          refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTour ={removeTour}></Tours>
    </div>
  );
}

export default App;
