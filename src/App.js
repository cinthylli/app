import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './components/Menu.jsx'
import Products from './components/Products.jsx'

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


        <Products
          category={category}
          points={points}
        />
      </header>
    </div>
  );
}

export default App;
