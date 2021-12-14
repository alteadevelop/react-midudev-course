import React, {useEffect, useState} from 'react'
import './App.css'
import Gif from './components/Gif'
import getGifs from './services/getGifs'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs))
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => 
            <Gif 
              key={singleGif.id}
              title={singleGif.title} 
              url={singleGif.url} 
              id={singleGif.id}>
            </Gif>)
        }
      </section>
    </div>
  );
}

export default App;
