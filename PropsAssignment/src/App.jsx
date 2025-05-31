import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './Components/UserCard'
import Card from './Components/Card'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <div><h1>UserCard</h1>
     <div className="usercard" >   
      <UserCard name="Shailja Bhargava" age={21} isOnline= {true}/>
      <UserCard name="Priyanshu Udainiya" age={22} isOnline= {true}/>
      <UserCard name="Abhijeet Thakur" age={23} isOnline= {false}/>
      <UserCard name="Khyati Bhargava" age={10} isOnline= {true}/>
      <UserCard name="Vanshika Thakur" age={21} isOnline= {false}/>
     </div>
     </div>
     <div>
      <Card title="Software Engineer">
        <p>"Frontend Developer"</p>
        <p>"FullStack Developer"</p>
      </Card>
     </div>
     <div>
      <Counter/>
     </div>
    </>
  )
}

export default App
