import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [enfantCadeau, setEnfantCadeau] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get(`http://localhost:3001/api/enfant`)
      .then(response => setEnfantCadeau(response.data))
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
     {enfantCadeau.map(e => {
        return <li>{e.firstname} {e.lastname} {e.sagesse} {e.cadeaux_ID}</li>
      })}
    </div>
  );
}

export default App;
