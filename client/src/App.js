import './App.css';
import Acard from './components/Acard';
import { useEffect, useState }from 'react';

function App() {
  const [ backendData, setBackendData ] = useState([{}])

  useEffect(() => {
    fetch("/aeaapi").then(
      resp => resp.json()
    ).then(
      dta => {
        console.log("dta es ", dta)
        setBackendData(dta)
      }
    )
  }, []) 

  return (
    <div className="App">
      
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading</p>
      ) : (
        backendData.users.map((user, i) => (
          <Acard key={i} first_name={user.first_name} last_name={user.last_name} email={user.email} gender={user.gender} industry={user.industry} />
         ))
      )}
      S
    </div>
  );
}

export default App;
