import user from '../../user.json'
import Paper from '@mui/material/Paper'

function Summary() {
  return (
    <Paper sx={{ p: 2 }} elevation={8}>
      <h1>About me</h1>
      <div>
        <h2>Short Summary</h2>
        <span>Name: {user.name}</span>
        <div>
          <h3>Education</h3>
          <ul>
            <li>Specialist Degree: {user.education['Degree Bachelor']} </li>
            <li>Bachelor Degree: {user.education['Degree Bachelor']} </li>
          </ul>
        </div>
      </div>
    </Paper>
  )
}

export default Summary
