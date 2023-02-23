// import axios from 'axios';
import { useEffect } from 'react';

import './App.scss';

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => console.log((json)));
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
