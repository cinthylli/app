import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './components/Menu.jsx'
import Products from './components/Products.jsx'
import Historic from './components/Historico.jsx'

function App() {

  const [points, setPoints] = useState(0);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState("Home");

  return (
    <div className="App">

      <Menu
        category={category}
        points={points}
        page={page}
        setPoints={setPoints}
        setCategory={setCategory}
        setPage={setPage}
      />
      <header className="App-header">

        {
          page === "Home" ? 
          <Products
          category={category}
              points={points}
              setPoints={setPoints}
            /> : 
            <Historic
                points={points}
            />
        }
        
      </header>
    </div>
  );
}

export default App;
