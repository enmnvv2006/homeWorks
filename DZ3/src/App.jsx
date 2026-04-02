import { useState, useEffect } from 'react'
import BootstrapUserList from './BootstrapUserList'
import MaterialUserList from './MaterialUserList'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching users:", error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading users...</div>

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Users from JSONPlaceholder</h1>
      <BootstrapUserList users={users} />
      <hr style={{ margin: '3rem 0' }} />
      <MaterialUserList users={users} />
    </div>
  )
}

export default App
