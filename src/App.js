import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './components/Menu.jsx'

function App() {

  const [points, setPoints] = useState(0);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState("Home");

  return (
    <div className="App">

      <Menu
        category={category}
        points={points}
        setPoints={setPoints}
        setCategory={setCategory}
        setPage={setPage}
      />
      <header className="App-header">
        <h1>{category}</h1>
        <h2>{page}</h2>
      </header>
    </div>
  );
}

export default App;
