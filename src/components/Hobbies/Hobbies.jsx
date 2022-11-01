import user from '../../user.json'
import Paper from '@mui/material/Paper'

function Hobbies() {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <h2>Hobbies</h2>
      <ul>
        {user.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </Paper>
  )
}

export default Hobbies
