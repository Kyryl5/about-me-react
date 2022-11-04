import Paper from '@mui/material/Paper'

function Hobbies({ aboutUser }) {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <h2>Hobbies</h2>
      <ul>
        {aboutUser.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </Paper>
  )
}

export default Hobbies
