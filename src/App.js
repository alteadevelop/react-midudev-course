import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <a href='/'><h1>App</h1></a>
        <a href='/gif/panda'>Gifs de Colombia</a>
        <a href='/gif/ecuador'>Gifs de Ecuador</a>
        <a href='/gif/chile'>Gifs de Chile</a>
        <Route path="/gif/:keyword" component={ListOfGifs}></Route>
      </section>
    </div>
  );
}

export default App;
