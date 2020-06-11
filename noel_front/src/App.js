import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [enfantCadeau, setEnfantCadeau] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const [enfant, setEnfant] = useState([])

  useEffect(() => {
    fetchData2()
  }, [])

  
  useEffect(() => {
    fetchData3()
  }, )
  const [cadeau, setCadeau]= useState({
    name: '',
    status: ''
  })

  useEffect(() => {
    fetchData5()
  }, [])

  useEffect(() => {
    fetchData6()
  }, [])

const [list, setList]= useState([])
const [lutin, setLutin]= useState([])

  const fetchData = () => {
    axios.get(`http://localhost:3001/api/enfantcadeau`)
      .then(response => setEnfantCadeau(response.data))
      .catch(err => console.error(err))
  }
 
  const fetchData2 = () => {
    axios.get(`http://localhost:3001/api/enfant`)
      .then(response => setEnfant(response.data))
      .catch(err => console.error(err))
  }
  const [firstname, setFirstname] = useState()
  const fetchData3 = () => {
    axios.put(`http://localhost:3001/api/enfant/${firstname}`)
      .then()
      .catch(err => console.error(err))
  }
  const fetchData4 = () => {
    axios.post(`http://localhost:3001/api/cadeau`, cadeau)
      .then(fetchData)
      .catch(err => console.error(err))
  }

  const fetchData5 = () => {
    axios.get(`http://localhost:3001/api/cadeau`)
      .then(response => setList(response.data))
      .catch(err => console.error(err))
  }
  const fetchData6 = () => {
    axios.get(`http://localhost:3001/api/lutin`)
      .then(response => setLutin(response.data))
      .catch(err => console.error(err))
  }


  const fetchData7 = () => {
    axios.get(`http://localhost:3001/api/lutincadeau`)
      .then(response => setLutincad(response.data))
      .catch(err => console.error(err))
  }
  const [lutincad,setLutincad]= useState([])

  useEffect(() => {
    fetchData7()
  }, [])


  useEffect(() => {
    fetchData8()
  }, )

  const [statusCad, setStatusCad] = useState()
  const [nameCad, setNameCad] = useState()
  const fetchData8 = () => {
    axios.put(`http://localhost:3001/api/cadeau/${nameCad}/${statusCad}`)
      .then()
      .catch(err => console.error(err))
  }

  return (
    
    <div className="App">
      <h1>Enfants avec cadeaux</h1>  
     {enfantCadeau.map(e =>  
        <li>Prénom: {e.firstname} Nom: {e.lastname} Niveau de sagesse :{e.sagesse}   Cadeaux: {e.name}</li>
      )}

      <h4>Suppression des enfants pas sage </h4>
<form>
<input type='text' value={firstname} onChange = {(e) => setFirstname(e.target.value)} placeholder='Inserer le prénom '/>
  <button type ='submit'> Priver de Cadeaux </button>
</form>
<h1>Enfants</h1> 
{enfant.map(e => <li>Prénom: {e.firstname} Nom: {e.lastname} Niveau de sagesse :{e.sagesse}</li>
      )}
    

<h1>Liste des cadeaux</h1>  
     {list.map(e =>  
        <li> Cadeau: {e.name} Status: {e.status} </li>
      )}

  <form onSubmit= {fetchData4}>
  <input type='text' value={cadeau.name} onChange = {(e) => setCadeau({...cadeau, name : e.target.value})} placeholder='Inserer le Cadeau '/>
  <input type='text' value={cadeau.status} onChange = {(e) => setCadeau({...cadeau, status : e.target.value})} placeholder='Inserer le status '/>
    <button type ='submit'> Valider </button>
  </form>
  <h1>Liste des lutins</h1>  
     {lutin.map(e =>  
        <li> Prénom: {e.firstname} Nom: {e.lastname} </li>
      )}

<h1>Lutins avec cadeaux</h1>  
     {lutincad.map(e =>  
        <li>Prénom: {e.firstname} Nom: {e.lastname}  Cadeaux: {e.name}</li>
      )}


<h4>Modification du status des cadeaux </h4>
<form onSubmit={fetchData8} >
<input type='text' value={nameCad} onChange = {(e) => setNameCad(e.target.value)} placeholder='Inserer le nom du cadeau '/>
<input type='text' value={statusCad} onChange = {(e) => setStatusCad(e.target.value)} placeholder='Inserer le statut '/>
  <button type ='submit'> Valider le nouveau statut </button>
</form>

  </div>

  );
}

export default App;
