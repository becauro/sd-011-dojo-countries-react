import React from 'react';
import './App.css';
import RenderList from './RenderList';

class App extends React.Component {  
  render() {
    return (
      <main>
        <h1>Lista de países</h1>
        <RenderList />
      </main>
    )
  }
}

export default App;
