import axios from 'axios';
import { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';

function App() {
  useEffect(() => {
    axios("http://localhost:3001/posts")
      .then((json) => console.log((json.data)));
  }, [])
  return (
    <div className="App">
      <div className="card" >
        <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
          </div>
      </div>
    </div>
  );
}

export default App;
