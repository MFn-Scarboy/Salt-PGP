import React, { useEffect, useState} from 'react';
import Address from './Components/Address/Address'
import Age from './Components/Age/Age'
import Name from './Components/Name/Name'
import NameChange from './Components/NameChange/NameChange'
import { UserData } from './types'
import './App.css';

function App() {
  const [user, setUser] = useState<UserData>({
    name: '',
    age: 0,
    address: ''
  })

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()

      const user = data.results[0]

      setUser(prev => {
        return {
          ...prev,
          name: user.name.first,
          age: user.dob.age,
          address: user.location.street.name
        }
      })
    }

    getData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.currentTarget.value

    setUser({ ...user, name: value})
  }

  return (
    <div className="App">
      <Address user={user}/>
      <Age user={user}/>
      <Name user={user}/>
      <NameChange user={user} onNameChange={handleChange}/>
    </div>
  );
}

export default App;
